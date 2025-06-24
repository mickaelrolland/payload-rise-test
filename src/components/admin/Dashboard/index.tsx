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
			</div>
		</div>
	);
};

export default AdminDashboard;
