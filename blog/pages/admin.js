import Link from 'next/link';
import React, { useEffect, useState } from 'react';




function Admin() {
   

  
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        console.log("useeffect is running");
        fetch('http://127.0.0.1:8000/api/blogs/').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed)
                setBlogs(parsed)
            })
    }, [])



  
 
  return (
    <div className="bg-gray-200 h-screen ">
      <nav className="bg-white p-6">
        <h1 className="text-lg font-medium">Admin Dashboard</h1> 
        <button className="bg-red-500 text-white p-2 rounded-sm"><Link href='/admin/add-blog'>Add Blog</Link></button>
      </nav>
      <div className="p-6">
        <table className="w-full text-left table-collapse">
          <thead>
            <tr>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Title</th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Author</th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(post => (
              <tr key={post.id}>
                <td className="p-2 border-t border-gray-200">{post.title}</td>
                <td className="p-2 border-t border-gray-200">{post.name}</td>
                <td className="p-2 border-t border-gray-200">
                  <button className="bg-blue-500 text-white p-2 rounded-sm"> <Link href={`/admin/edit/${post.id}`}>Edit </Link></button>
                  <button className="bg-red-500 text-white p-2 rounded-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
