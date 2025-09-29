/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPlantPage() {
  const router = useRouter();
  const params = useParams();
  const plantId = params.id as string;

  const [plant, setPlant] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch plant details
  useEffect(() => {
    async function fetchPlant() {
      try {
        const res = await fetch(`/api/item/${plantId}`);
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Failed to fetch plant");
        }
        const data = await res.json();
        setPlant({
          name: data.name,
          description: data.description || "",
          stock: data.stock,
          price: data.price,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPlant();
  }, [plantId]);

  // Handle update
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/item/${plantId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plant),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Update failed");
      }

      router.push("/"); // redirect to plants list
    } catch (err: any) {
      setError(err.message);
    }
  }

  if (loading) return <p className="p-4">Loading plant...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Plant</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={plant.name}
          onChange={(e) => setPlant({ ...plant, name: e.target.value })}
          placeholder="Plant Name"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={plant.description}
          onChange={(e) =>
            setPlant({ ...plant, description: e.target.value })
          }
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={plant.stock}
          onChange={(e) =>
            setPlant({ ...plant, stock: Number(e.target.value) })
          }
          placeholder="Stock"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          value={plant.price}
          onChange={(e) =>
            setPlant({ ...plant, price: Number(e.target.value) })
          }
          placeholder="Price"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Update Plant
        </button>
      </form>
    </div>
  );
}
