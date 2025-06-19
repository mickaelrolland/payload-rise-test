'use client';

import React, { useEffect, useState } from 'react';
import { useConfig } from '@payloadcms/ui/providers/Config';
import { useTranslation } from '@payloadcms/ui/providers/Translation';
import './index.scss';

interface Page {
	id: string;
	title: string;
	slug: string;
	pageType: string;
	parent?: string | Page;
	navigationOrder: number;
	hideFromNavigation: boolean;
	updatedAt: string;
	createdAt: string;
}

interface HierarchyNode extends Page {
	children: HierarchyNode[];
	level: number;
}

const PageHierarchyComponent: React.FC = () => {
	const [pages, setPages] = useState<Page[]>([]);
	const [loading, setLoading] = useState(true);
	const [hierarchy, setHierarchy] = useState<HierarchyNode[]>([]);

	useEffect(() => {
		const fetchPages = async () => {
			try {
				const response = await fetch(
					'/api/pages?limit=100&sort=navigationOrder',
				);
				const data = await response.json();
				setPages(data.docs || []);
				buildHierarchy(data.docs || []);
			} catch (error) {
				console.error('Error fetching pages:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPages();
	}, []);

	const buildHierarchy = (pages: Page[]): void => {
		const pageMap = new Map<string, HierarchyNode>();
		const rootPages: HierarchyNode[] = [];

		// Initialize all pages as hierarchy nodes
		pages.forEach((page) => {
			pageMap.set(page.id, {
				...page,
				children: [],
				level: 0,
			});
		});

		// Build parent-child relationships
		pages.forEach((page) => {
			const node = pageMap.get(page.id);
			if (!node) return;

			if (page.parent) {
				const parentId =
					typeof page.parent === 'string'
						? page.parent
						: page.parent.id;
				const parentNode = pageMap.get(parentId);
				if (parentNode) {
					node.level = parentNode.level + 1;
					parentNode.children.push(node);
					parentNode.children.sort(
						(a, b) => a.navigationOrder - b.navigationOrder,
					);
				} else {
					rootPages.push(node);
				}
			} else {
				rootPages.push(node);
			}
		});

		rootPages.sort((a, b) => a.navigationOrder - b.navigationOrder);
		setHierarchy(rootPages);
	};

	const getPageTypeIcon = (pageType: string): string => {
		switch (pageType) {
			case 'landing':
				return '🏠';
			case 'destination':
				return '🌍';
			case 'content':
				return '📄';
			case 'experience':
				return '✨';
			default:
				return '📋';
		}
	};

	const getPageTypeColor = (pageType: string): string => {
		switch (pageType) {
			case 'landing':
				return '#4CAF50';
			case 'destination':
				return '#2196F3';
			case 'content':
				return '#FF9800';
			case 'experience':
				return '#9C27B0';
			default:
				return '#757575';
		}
	};

	const renderHierarchyNode = (node: HierarchyNode): React.ReactNode => {
		return (
			<div key={node.id} className="hierarchy-node">
				<div
					className={`page-item level-${node.level}`}
					style={{ paddingLeft: `${node.level * 20}px` }}
				>
					<div className="page-content">
						<span
							className="page-type-icon"
							style={{ color: getPageTypeColor(node.pageType) }}
						>
							{getPageTypeIcon(node.pageType)}
						</span>
						<div className="page-info">
							<span className="page-title">{node.title}</span>
							<span className="page-slug">/{node.slug}</span>
							<span
								className="page-type"
								style={{
									backgroundColor: getPageTypeColor(
										node.pageType,
									),
								}}
							>
								{node.pageType}
							</span>
							{node.hideFromNavigation && (
								<span className="hidden-badge">Hidden</span>
							)}
						</div>
						<div className="page-actions">
							<a
								href={`/admin/collections/pages/${node.id}`}
								className="edit-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Edit
							</a>
						</div>
					</div>
				</div>
				{node.children.length > 0 && (
					<div className="children">
						{node.children.map((child) =>
							renderHierarchyNode(child),
						)}
					</div>
				)}
			</div>
		);
	};

	if (loading) {
		return (
			<div className="page-hierarchy-loading">
				<div className="loading-spinner"></div>
				<p>Loading page hierarchy...</p>
			</div>
		);
	}

	return (
		<div className="page-hierarchy-container">
			<div className="hierarchy-header">
				<h2>Page Navigation Hierarchy</h2>
				<p>
					Visual representation of your site&apos;s page structure and
					navigation
				</p>
			</div>

			<div className="hierarchy-legend">
				<div className="legend-item">
					<span style={{ color: getPageTypeColor('landing') }}>
						🏠
					</span>
					Landing Pages
				</div>
				<div className="legend-item">
					<span style={{ color: getPageTypeColor('destination') }}>
						🌍
					</span>
					Destination Hubs
				</div>
				<div className="legend-item">
					<span style={{ color: getPageTypeColor('content') }}>
						📄
					</span>
					Content Pages
				</div>
				<div className="legend-item">
					<span style={{ color: getPageTypeColor('experience') }}>
						✨
					</span>
					Experience Pages
				</div>
			</div>

			<div className="hierarchy-tree">
				{hierarchy.length > 0 ? (
					hierarchy.map((node) => renderHierarchyNode(node))
				) : (
					<div className="no-pages">
						<p>
							No pages found. Create your first page to see the
							hierarchy.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default PageHierarchyComponent;
