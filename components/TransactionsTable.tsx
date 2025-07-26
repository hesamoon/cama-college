import Image from "next/image";
import toast from "react-hot-toast";

type Transaction = {
  program: string;
  date: string;
  amount: string;
  payType: string;
  status: string;
  transactionId: string;
};

function TransactionsTable({
  title,
  transactions,
}: {
  title: string;
  transactions: Transaction[];
}) {
  const handleCopy = (transactionId: string) => {
    // Try modern clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(transactionId)
        .then(() => {
          toast.success("Transaction ID copied!");
        })
        .catch(() => {
          fallbackCopy(transactionId);
        });
    } else {
      fallbackCopy(transactionId);
    }
  };

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed"; // Avoid scrolling to bottom
    textarea.style.opacity = "0"; // Hide from user
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        // toast.success("Transaction ID copied!");
      } else {
        toast.error("Failed to copy.");
      }
    } catch (err) {
      toast.error("Copy not supported.");
    }

    document.body.removeChild(textarea);
  };

  return (
    <div className="md:rounded-sm md:border md:border-outline-level0">
      <table className="hidden md:table min-w-full text-left">
        <thead className="bg-[#F3F3F3] text-on_surface-light label-large-db">
          <tr className="grid grid-cols-8">
            <th className="px-4 py-3 col-span-2">{title}</th>
            <th className="px-4 py-3 col-span-1">Date</th>
            <th className="px-4 py-3 col-span-1">Amount</th>
            <th className="px-4 py-3 col-span-1">Pay Type</th>
            <th className="px-4 py-3 col-span-1">Status</th>
            <th className="px-4 py-3 col-span-2">Transaction ID</th>
          </tr>
        </thead>

        <tbody className="">
          {transactions.length > 0 ? (
            transactions.map((tx, index) => (
              <tr
                key={index}
                className="border-t border-outline-level0 body-medium grid grid-cols-8 items-center"
              >
                <td className="px-4 py-3 text-on_surface-light col-span-2">
                  {tx.program}
                </td>
                <td className="px-4 py-3 text-txt-on-surface-secondary-light col-span-1">
                  {tx.date}
                </td>
                <td className="px-4 py-3 text-on_surface-light col-span-1">
                  {tx.amount}
                </td>
                <td className="px-4 flex items-center gap-2 col-span-1">
                  {tx.payType === "PayPal" && (
                    <Image
                      src="/paypal-logo.svg"
                      alt="paypal"
                      width={80}
                      height={20.8}
                    />
                  )}
                </td>
                <td className="px-4 py-3 text-green flex items-center gap-1 col-span-1">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5L4.99529 9.5L13 1.5"
                      stroke="#34C759"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {tx.status}
                </td>
                <td className="px-4 py-3 col-span-2">
                  <div
                    className="flex cursor-pointer items-center gap-2 border border-outline-level0 rounded-full w-fit py-2 px-5"
                    onClick={() => handleCopy(tx.transactionId)}
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3337 11.25V14.75C13.3337 17.6667 12.167 18.8333 9.25033 18.8333H5.75033C2.83366 18.8333 1.66699 17.6667 1.66699 14.75V11.25C1.66699 8.33332 2.83366 7.16666 5.75033 7.16666H9.25033C12.167 7.16666 13.3337 8.33332 13.3337 11.25Z"
                        stroke="#A91418"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M18.3337 6.24999V9.74999C18.3337 12.6667 17.167 13.8333 14.2503 13.8333H13.3337V11.25C13.3337 8.33332 12.167 7.16666 9.25033 7.16666H6.66699V6.24999C6.66699 3.33332 7.83366 2.16666 10.7503 2.16666H14.2503C17.167 2.16666 18.3337 3.33332 18.3337 6.24999Z"
                        stroke="#A91418"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    {tx.transactionId}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="border-t border-outline-level0 body-medium grid grid-cols-8 text-on_surface-light items-center">
              <h5 className="col-span-8 p-3 text-center">
                Transaction not found!
              </h5>
            </tr>
          )}
        </tbody>
      </table>

      <div className="md:hidden">
        {transactions.length > 0 ? (
          transactions.map((tx, index) => (
            <div
              key={index}
              className="space-y-4 p-3 mobile-body-medium border-b border-outline-level0"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-0">
                  <h4 className="text-on_surface-light">{tx.program}</h4>
                  <h4 className="text-txt-on-surface-secondary-light">
                    {tx.date}
                  </h4>
                </div>

                <div
                  className="flex cursor-pointer items-center gap-2 border border-outline-level0 rounded-full w-fit py-2 px-3 text-txt-on-surface-secondary-light"
                  onClick={() => handleCopy(tx.transactionId)}
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 11.25V14.75C13.3337 17.6667 12.167 18.8333 9.25033 18.8333H5.75033C2.83366 18.8333 1.66699 17.6667 1.66699 14.75V11.25C1.66699 8.33332 2.83366 7.16666 5.75033 7.16666H9.25033C12.167 7.16666 13.3337 8.33332 13.3337 11.25Z"
                      stroke="#A91418"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M18.3337 6.24999V9.74999C18.3337 12.6667 17.167 13.8333 14.2503 13.8333H13.3337V11.25C13.3337 8.33332 12.167 7.16666 9.25033 7.16666H6.66699V6.24999C6.66699 3.33332 7.83366 2.16666 10.7503 2.16666H14.2503C17.167 2.16666 18.3337 3.33332 18.3337 6.24999Z"
                      stroke="#A91418"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {tx.transactionId}
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="space-y-2">
                  <div className="">
                    {tx.payType === "PayPal" && (
                      <Image
                        src="/paypal-logo.svg"
                        alt="paypal"
                        width={63}
                        height={16}
                      />
                    )}
                  </div>

                  <div className="text-green flex items-center gap-1">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L4.99529 9.5L13 1.5"
                        stroke="#34C759"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    {tx.status}
                  </div>
                </div>

                <div>
                  <h4 className="text-on_surface-light">{tx.amount}</h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="p-3 mobile-body-medium text-on_surface-light text-center">
            Transaction not found!
          </h5>
        )}
      </div>
    </div>
  );
}

export default TransactionsTable;
