'use client';

import React from 'react';
import PageHierarchyComponent from '../PageHierarchy';
import './index.scss';

const AdminDashboard: React.FC = () => {
	return (
		<div className="admin-dashboard">
			<div className="dashboard-header">
				<h1>Navigation Dashboard</h1>
				<p>Manage your site&apos;s hierarchical navigation structure</p>
			</div>

			<div className="dashboard-content">
				<div className="dashboard-section">
					<div className="section-header">
						<h3>Page Hierarchy Overview</h3>
						<p>
							Visual representation of your page structure and
							relationships
						</p>
					</div>
					<PageHierarchyComponent />
				</div>

				<div className="dashboard-section">
					<div className="section-header">
						<h3>Quick Actions</h3>
						<p>Common navigation management tasks</p>
					</div>
					<div className="quick-actions">
						<a
							href="/admin/collections/pages/create"
							className="action-card"
						>
							<div className="action-icon">📄</div>
							<div className="action-content">
								<h4>Create New Page</h4>
								<p>Add a new page to your site hierarchy</p>
							</div>
						</a>
						<a
							href="/admin/collections/pages"
							className="action-card"
						>
							<div className="action-icon">📋</div>
							<div className="action-content">
								<h4>Manage All Pages</h4>
								<p>View and edit all existing pages</p>
							</div>
						</a>
						<a
							href="/admin/globals/main-menu"
							className="action-card"
						>
							<div className="action-icon">🧭</div>
							<div className="action-content">
								<h4>Main Navigation</h4>
								<p>
									Configure your site&apos;s main navigation
									menu
								</p>
							</div>
						</a>
					</div>
				</div>

				<div className="dashboard-section">
					<div className="section-header">
						<h3>Navigation Guidelines</h3>
						<p>Best practices for organizing your site structure</p>
					</div>
					<div className="guidelines">
						<div className="guideline-item">
							<div className="guideline-icon">🏠</div>
							<div className="guideline-content">
								<h4>Landing Pages</h4>
								<p>
									Use for main entry points and top-level
									destinations. These should be your primary
									navigation items.
								</p>
							</div>
						</div>
						<div className="guideline-item">
							<div className="guideline-icon">🌍</div>
							<div className="guideline-content">
								<h4>Destination Hubs</h4>
								<p>
									Create destination-specific landing pages
									that can contain multiple related content
									pages.
								</p>
							</div>
						</div>
						<div className="guideline-item">
							<div className="guideline-icon">📄</div>
							<div className="guideline-content">
								<h4>Content Pages</h4>
								<p>
									Regular content pages that belong under
									destination hubs or landing pages.
								</p>
							</div>
						</div>
						<div className="guideline-item">
							<div className="guideline-icon">✨</div>
							<div className="guideline-content">
								<h4>Experience Pages</h4>
								<p>
									Special pages for unique experiences, tours,
									or interactive content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
