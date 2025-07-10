import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const res = await response.json();
      setData(res);
    } catch (err) {
      console.error("Something went wrong:", err);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-600 p-4">
        <div className="w-full max-w-6xl overflow-x-auto rounded-lg shadow-lg border border-white/20">
          <table className="min-w-full text-left text-white">
            <thead className="bg-white/10">
              <tr>
                <th className="py-2 px-4 border-b whitespace-nowrap">ID</th>
                <th className="py-2 px-4 border-b whitespace-nowrap">Title</th>
                <th className="py-2 px-4 border-b whitespace-nowrap">Body</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5">
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="py-2 px-4 border-b">{item.title}</td>
                    <td className="py-2 px-4 border-b">{item.body}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
