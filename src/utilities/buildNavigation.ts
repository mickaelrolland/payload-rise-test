import { Payload } from 'payload';

export interface NavigationItem {
	id: string;
	title: string;
	slug: string;
	url: string;
	pageType: string;
	navigationOrder: number;
	children: NavigationItem[];
	level: number;
	isActive?: boolean;
	isActiveParent?: boolean;
}

export interface NavigationConfig {
	autoPopulate: boolean;
	includePageTypes: string[];
	maxDepth: number;
	displaySettings: {
		showPageTypes: boolean;
		showNavigationOrder: boolean;
		highlightActiveParents: boolean;
	};
}

export const buildNavigationFromPages = async (
	payload: Payload,
	config: NavigationConfig,
	currentSlug?: string,
): Promise<NavigationItem[]> => {
	if (!config.autoPopulate) {
		return [];
	}

	// Fetch pages that should be included in navigation
	const pages = await payload.find({
		collection: 'pages',
		where: {
			and: [
				{
					hideFromNavigation: { not_equals: true },
				},
				{
					pageType: { in: config.includePageTypes },
				},
			],
		},
		limit: 100,
		sort: 'navigationOrder',
		depth: 1,
	});

	// Build the hierarchy
	const pageMap = new Map<string, NavigationItem>();
	const rootItems: NavigationItem[] = [];

	// First pass: create all navigation items
	pages.docs.forEach((page: any) => {
		const item: NavigationItem = {
			id: page.id,
			title: page.title,
			slug: page.slug,
			url: page.slug === 'home' ? '/' : `/${page.slug}`,
			pageType: page.pageType,
			navigationOrder: page.navigationOrder || 0,
			children: [],
			level: 0,
			isActive: currentSlug === page.slug,
			isActiveParent: false,
		};
		pageMap.set(page.id, item);
	});

	// Second pass: build parent-child relationships
	pages.docs.forEach((page: any) => {
		const item = pageMap.get(page.id);
		if (!item) return;

		if (page.parent && typeof page.parent === 'object' && page.parent.id) {
			const parentItem = pageMap.get(page.parent.id);
			if (parentItem && parentItem.level < config.maxDepth - 1) {
				item.level = parentItem.level + 1;
				parentItem.children.push(item);

				// Sort children by navigation order
				parentItem.children.sort(
					(a, b) => a.navigationOrder - b.navigationOrder,
				);

				// Check if this parent should be highlighted as active parent
				if (
					item.isActive &&
					config.displaySettings.highlightActiveParents
				) {
					parentItem.isActiveParent = true;
				}
			} else {
				// Parent exists but we've reached max depth, add to root
				rootItems.push(item);
			}
		} else {
			rootItems.push(item);
		}
	});

	// Sort root items and propagate active parent status up the hierarchy
	rootItems.sort((a, b) => a.navigationOrder - b.navigationOrder);

	// Propagate active parent status up the hierarchy
	const propagateActiveParent = (items: NavigationItem[]): boolean => {
		let hasActiveChild = false;

		items.forEach((item) => {
			const childHasActive = propagateActiveParent(item.children);
			if (childHasActive) {
				item.isActiveParent = true;
				hasActiveChild = true;
			} else if (item.isActive) {
				hasActiveChild = true;
			}
		});

		return hasActiveChild;
	};

	propagateActiveParent(rootItems);

	return rootItems;
};

export const buildCustomNavigation = (
	customNavItems: any[],
): NavigationItem[] => {
	return customNavItems
		.map((item, index) => {
			const navGroup = item.navigationGroup;
			if (!navGroup) return null;

			const mainItem: NavigationItem = {
				id: `custom-${index}`,
				title:
					navGroup.groupTitle ||
					navGroup.text ||
					navGroup.label ||
					'',
				slug: navGroup.url || '',
				url:
					navGroup.url || navGroup.reference?.value?.slug
						? `/${navGroup.reference.value.slug}`
						: '#',
				pageType: 'custom',
				navigationOrder: index,
				children: [],
				level: 0,
			};

			// Add children if they exist
			if (navGroup.children && Array.isArray(navGroup.children)) {
				mainItem.children = navGroup.children.map(
					(child: any, childIndex: number) => ({
						id: `custom-${index}-${childIndex}`,
						title: child.text || child.label || '',
						slug: child.url || '',
						url:
							child.url || child.reference?.value?.slug
								? `/${child.reference.value.slug}`
								: '#',
						pageType: 'custom',
						navigationOrder: childIndex,
						children: [],
						level: 1,
					}),
				);
			}

			return mainItem;
		})
		.filter(Boolean) as NavigationItem[];
};

export const getNavigationData = async (
	payload: Payload,
	currentSlug?: string,
): Promise<NavigationItem[]> => {
	try {
		const mainMenu = (await payload.findGlobal({
			slug: 'main-menu',
			depth: 2,
		})) as any;

		const config: NavigationConfig = {
			autoPopulate: mainMenu.autoPopulate ?? true,
			includePageTypes: mainMenu.includePageTypes || [
				'landing',
				'destination',
			],
			maxDepth: mainMenu.maxDepth || 3,
			displaySettings: mainMenu.displaySettings || {
				showPageTypes: false,
				showNavigationOrder: false,
				highlightActiveParents: true,
			},
		};

		if (config.autoPopulate) {
			return await buildNavigationFromPages(payload, config, currentSlug);
		} else {
			return buildCustomNavigation(mainMenu.customNavItems || []);
		}
	} catch (error) {
		console.error('Error building navigation:', error);
		return [];
	}
};
