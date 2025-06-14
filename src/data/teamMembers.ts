
export interface TeamMember {
  name: string;
  role: string;
  email: string;
  department: string;
  image?: string;
  bio?: string;
  expertise?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

// Real team member data sorted alphabetically by name
export const teamMembers: TeamMember[] = [
  {
    name: "Aaruush Kumar",
    role: "Branch Secretary",
    email: "aarushkumar@180dc.org",
    department: "Administration",
    image: "/lovable-uploads/4ab0c373-00e6-4537-9f6a-3cf18199261a.png",
    bio: "Dedicated to organizational excellence and maintaining effective communication across all branch activities.",
    expertise: ["Administration", "Communication", "Event Management"],
    social: {
      email: "aarushkumar@180dc.org",
      linkedin: "#"
    }
  },
  {
    name: "Akshat Arora",
    role: "Treasurer",
    email: "akshatarora@180dc.org",
    department: "Finance",
    image: "/lovable-uploads/ff3ad96b-a1cd-4f87-b0cb-13c7c1444a24.png",
    bio: "Financial strategist ensuring sustainable growth and transparent financial management for all branch operations.",
    expertise: ["Financial Management", "Budget Planning", "Financial Analysis"],
    social: {
      email: "akshatarora@180dc.org",
      linkedin: "#"
    }
  },
  {
    name: "Arnav Dikshit",
    role: "President",
    email: "arnavdikshit@180dc.org",
    department: "Leadership",
    image: "/lovable-uploads/7a3e5545-331b-4b30-9685-f2406d0dd439.png",
    bio: "Visionary leader driving the mission of 180 Degrees Consulting MUJ, fostering innovation and social impact through strategic consulting.",
    expertise: ["Strategic Leadership", "Vision Setting", "Team Management"],
    social: {
      email: "arnavdikshit@180dc.org",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jhanvi Choukse",
    role: "Marketing Director",
    email: "jhanvichoukse@180dc.org",
    department: "Marketing",
    image: "/lovable-uploads/5fa092dd-f981-45fa-88d3-71eba8752012.png",
    bio: "Creative marketing strategist building brand awareness and driving engagement through innovative campaigns and digital presence.",
    expertise: ["Digital Marketing", "Brand Strategy", "Content Creation"],
    social: {
      email: "jhanvichoukse@180dc.org",
      linkedin: "#"
    }
  },
  {
    name: "Lavisha Lohar",
    role: "Consulting Director",
    email: "lavishalohar@180dc.org",
    department: "Consulting",
    image: "/lovable-uploads/31cf9e43-1c4e-42bc-9c57-d89151b5a511.png",
    bio: "Expert consultant leading project delivery and client relationships, ensuring high-quality solutions for social enterprises.",
    expertise: ["Project Management", "Client Relations", "Strategic Consulting"],
    social: {
      email: "lavishalohar@180dc.org",
      linkedin: "#"
    }
  },
  {
    name: "Shivam Singh",
    role: "Director of Operations",
    email: "shivamsingh@180dc.org",
    department: "Operations",
    image: "/lovable-uploads/cf640f51-6e99-47b7-85df-454996fa8977.png",
    bio: "Operations expert streamlining processes and ensuring efficient project execution across all consulting engagements.",
    expertise: ["Operations Management", "Process Optimization", "Quality Assurance"],
    social: {
      email: "shivamsingh@180dc.org",
      linkedin: "#"
    }
  }
];

// Export data in different formats for various use cases

// JSON format
export const teamMembersJSON = JSON.stringify(teamMembers, null, 2);

// CSV format
export const teamMembersCSV = [
  "name,role,email",
  ...teamMembers.map(member => `${member.name},${member.role},${member.email}`)
].join('\n');

// HTML Table format
export const teamMembersHTMLTable = `
<table class="w-full border-collapse border border-gray-300">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Role</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
    </tr>
  </thead>
  <tbody>
    ${teamMembers.map(member => `
    <tr>
      <td class="border border-gray-300 px-4 py-2">${member.name}</td>
      <td class="border border-gray-300 px-4 py-2">${member.role}</td>
      <td class="border border-gray-300 px-4 py-2">${member.email}</td>
    </tr>`).join('')}
  </tbody>
</table>
`;

// Organize by department
export const teamMembersByDepartment = teamMembers.reduce((acc, member) => {
  if (!acc[member.department]) {
    acc[member.department] = [];
  }
  acc[member.department].push(member);
  return acc;
}, {} as Record<string, TeamMember[]>);
