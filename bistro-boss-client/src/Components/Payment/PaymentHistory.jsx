import React from "react";
import HomeTitle from "../HomeTitle";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <HomeTitle heading="Payment History" subHeading="You have done this" />
      <section>
        <h2 className="text-3xl">Total Payments: {payments.length}</h2>
      </section>
    </div>
  );
};

export default PaymentHistory;
