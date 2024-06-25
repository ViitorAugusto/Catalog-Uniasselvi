"use client";
import { auth } from "@/auth/auth";
import { useFetch } from "@/hook/get-use-state";
import { api } from "@/http/api-client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  is_admin: number;
}

const Teste = () => {
  async function fetchUser(): Promise<UserData> {
    const response = await api.get("user");
    return response.json();
  }

  const [userFetchState, isPending] = useFetch(fetchUser, () => {
    console.log("User fetched successfully");
  });

  return (
    <div className="my-20 h-screen flex justify-center items-center">
      {/* <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, fontSize: "2rem", scale: 2 }}
        transition={{ duration: 1 }}
      >
        Hello world
      </motion.h2> */}

      <motion.button
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <pre>
          {userFetchState
            ? JSON.stringify(userFetchState, null, 2)
            : "Carregando dados..."}
        </pre>
      </motion.button>
    </div>
  );
};

export default Teste;
