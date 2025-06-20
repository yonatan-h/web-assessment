import { useState } from "react";

export default function AddMealModal() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary py-2 px-4 rounded-lg text-white font-bold"
      >
        Add Meal
      </button>

      {isOpen && (
        <div
          className="fixed bg-black/20 top-0 left-0 bottom-0 right-0 flex justify-center items-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <form
            className="bg-white p-6 rounded-lg w-[400px] relative"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2 className="text-primary font-bold text-center text-lg">
              Add a Meal
            </h2>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                className="p-3 bg-gray-100 border border-gray-200 w-full rounded"
                placeholder="Food Name"
              />

              <input
                type="text"
                className="p-3 bg-gray-100 border border-gray-200 w-full rounded"
                placeholder="Food Rating"
              />

              <input
                type="text"
                className="p-3 bg-gray-100 border border-gray-200 w-full rounded"
                placeholder="Food Image (link)"
              />

              <input
                type="text"
                className="p-3 bg-gray-100 border border-gray-200 w-full rounded"
                placeholder="Restaurant Name"
              />

              <input
                type="text"
                className="p-3 bg-gray-100 border border-gray-200 w-full rounded"
                placeholder="Restaurant Logo"
              />

              <select name="" id="" className="text-gray-500 bg-gray-100 p-3">
                <option value="">Open</option>
                <option value="">Close</option>
              </select>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
