
import React, { useState } from 'react';
import { teamMembers, teamMembersJSON, teamMembersCSV, teamMembersHTMLTable } from '../data/teamMembers';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const TeamDataDisplay = () => {
  const [activeFormat, setActiveFormat] = useState<'table' | 'json' | 'csv'>('table');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const downloadFile = (content: string, filename: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Team Data Display</CardTitle>
          <CardDescription>
            View team member data in different formats for various use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Format Selection */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={activeFormat === 'table' ? 'default' : 'outline'}
              onClick={() => setActiveFormat('table')}
            >
              Table View
            </Button>
            <Button
              variant={activeFormat === 'json' ? 'default' : 'outline'}
              onClick={() => setActiveFormat('json')}
            >
              JSON Format
            </Button>
            <Button
              variant={activeFormat === 'csv' ? 'default' : 'outline'}
              onClick={() => setActiveFormat('csv')}
            >
              CSV Format
            </Button>
          </div>

          {/* Table View */}
          {activeFormat === 'table' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadFile(teamMembersCSV, 'team-members.csv', 'text/csv')}
                >
                  Download CSV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadFile(teamMembersJSON, 'team-members.json', 'application/json')}
                >
                  Download JSON
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.name}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.department}</TableCell>
                      <TableCell>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {member.email}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* JSON View */}
          {activeFormat === 'json' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(teamMembersJSON)}
                >
                  Copy JSON
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadFile(teamMembersJSON, 'team-members.json', 'application/json')}
                >
                  Download JSON
                </Button>
              </div>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{teamMembersJSON}</code>
              </pre>
            </div>
          )}

          {/* CSV View */}
          {activeFormat === 'csv' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(teamMembersCSV)}
                >
                  Copy CSV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadFile(teamMembersCSV, 'team-members.csv', 'text/csv')}
                >
                  Download CSV
                </Button>
              </div>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{teamMembersCSV}</code>
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamDataDisplay;
