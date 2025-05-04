import React from 'react';

const learnerTypes = [
  { title: 'Visual Learner', students: 12, teachers: 2 },
  { title: 'Audio Learner', students: 10, teachers: 1 },
  { title: 'Textual Learner', students: 8, teachers: 2 },
  { title: 'Practical Learner', students: 15, teachers: 3 },
];

const GroupManagementDashboard = () => (
  <div className="min-h-screen bg-gray-50">
    <nav className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow">
      <h2 className="text-2xl font-bold">Group Management Dashboard</h2>
      {/* Add nav links or user info here if needed */}
    </nav>
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {learnerTypes.map((type) => (
          <div key={type.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">{type.title}</h3>
            <div className="flex flex-col items-center text-gray-700">
              <span className="mb-1">Students Assigned: <span className="font-bold">{type.students}</span></span>
              <span>Teachers Assigned: <span className="font-bold">{type.teachers}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default GroupManagementDashboard; 