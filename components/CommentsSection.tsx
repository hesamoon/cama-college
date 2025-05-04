function CommentsSection() {
  const comments = [
    {
      id: 1,
      author: "Biran amri",
      date: "14 April",
      text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim.",
    },
    {
      id: 2,
      author: "Biran amri",
      date: "14 April",
      text: "Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit.",
    },
    {
      id: 3,
      author: "Biran amri",
      date: "14 April",
      text: "Sollicitudin tortor ut sem dictum odio in.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <select className="border p-2 rounded">
          <option>Sort By: Most Helpful</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {comments.map((comment) => (
        <div key={comment.id} className="border-b pb-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <p className="font-semibold">{comment.author}</p>
            <span className="text-gray-500 text-sm">{comment.date}</span>
          </div>
          <p className="text-gray-700 mb-2">{comment.text}</p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <button>👍 2</button>
            <button>👎 1</button>
            <button>💬 Reply</button>
          </div>
        </div>
      ))}

      <div className="text-center">
        <button className="px-4 py-2 border rounded text-red-500 hover:bg-gray-100">
          Show more ↓
        </button>
      </div>
    </div>
  );
}

export default CommentsSection;
