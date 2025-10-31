"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";

// components
import Chips from "./Chips";
import Button from "./Button";
import DragScroll from "./DragScroll";
import AILoader from "./loader/AILoader";

// types
import { ChatHistory, ChatMessage } from "@/app/types/types";

// api
import { question, summarize } from "@/lib/api/ai";

// Fake data
const history: ChatHistory[] = [
  {
    id: 1,
    title: "Math question - Algebra",
    messages: [
      {
        id: 1,
        type: "question",
        content: "How do I solve quadratic equations?",
        timestamp: "2024-01-15T10:30:00Z",
      },
      {
        id: 2,
        type: "answer",
        content:
          "To solve quadratic equations, you can use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a. First, make sure your equation is in the form ax² + bx + c = 0, then identify a, b, and c values.",
        timestamp: "2024-01-15T10:31:00Z",
      },
      {
        id: 3,
        type: "question",
        content: "Can you show me an example?",
        timestamp: "2024-01-15T10:32:00Z",
      },
      {
        id: 4,
        type: "answer",
        content:
          "Sure! Let's solve x² + 5x + 6 = 0. Here a=1, b=5, c=6. Plugging into the formula: x = (-5 ± √(25-24)) / 2 = (-5 ± 1) / 2. So x = -2 or x = -3.",
        timestamp: "2024-01-15T10:33:00Z",
      },
      {
        id: 5,
        type: "question",
        content: "Can you show me an example?",
        timestamp: "2024-01-15T10:32:00Z",
      },
      {
        id: 6,
        type: "answer",
        content:
          "Sure! Let's solve x² + 5x + 6 = 0. Here a=1, b=5, c=6. Plugging into the formula: x = (-5 ± √(25-24)) / 2 = (-5 ± 1) / 2. So x = -2 or x = -3.",
        timestamp: "2024-01-15T10:33:00Z",
      },
    ],
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:33:00Z",
  },
  {
    id: 2,
    title: "Search: React hooks",
    messages: [
      {
        id: 5,
        type: "question",
        content: "What are the most important React hooks?",
        timestamp: "2024-01-14T14:20:00Z",
      },
      {
        id: 6,
        type: "answer",
        content:
          "The most important React hooks are: useState (for state management), useEffect (for side effects), useContext (for context), useRef (for DOM references), and useMemo/useCallback (for performance optimization).",
        timestamp: "2024-01-14T14:21:00Z",
      },
    ],
    created_at: "2024-01-14T14:20:00Z",
    updated_at: "2024-01-14T14:21:00Z",
  },
  {
    id: 3,
    title: "AI Assistant intro",
    messages: [
      {
        id: 7,
        type: "question",
        content: "What can this AI assistant help me with?",
        timestamp: "2024-01-13T09:15:00Z",
      },
      {
        id: 8,
        type: "answer",
        content:
          "I can help you with programming questions, math problems, writing assistance, general knowledge, and much more. Feel free to ask me anything!",
        timestamp: "2024-01-13T09:16:00Z",
      },
    ],
    created_at: "2024-01-13T09:15:00Z",
    updated_at: "2024-01-13T09:16:00Z",
  },
  {
    id: 4,
    title: "Next.js deployment",
    messages: [
      {
        id: 9,
        type: "question",
        content: "How do I deploy a Next.js app to Vercel?",
        timestamp: "2024-01-12T16:45:00Z",
      },
      {
        id: 10,
        type: "answer",
        content:
          "To deploy to Vercel: 1) Push your code to GitHub, 2) Connect your repo to Vercel, 3) Vercel will automatically detect Next.js and deploy. You can also use 'vercel' CLI command for manual deployment.",
        timestamp: "2024-01-12T16:46:00Z",
      },
    ],
    created_at: "2024-01-12T16:45:00Z",
    updated_at: "2024-01-12T16:46:00Z",
  },
  {
    id: 5,
    title: "Tailwind styling tips",
    messages: [
      {
        id: 11,
        type: "question",
        content: "What are some useful Tailwind CSS utilities?",
        timestamp: "2024-01-11T11:30:00Z",
      },
      {
        id: 12,
        type: "answer",
        content:
          "Some useful Tailwind utilities: flex, grid, p-4 (padding), m-2 (margin), text-center, bg-blue-500, rounded-lg, shadow-md, hover:scale-105, transition-all. These cover most common styling needs!",
        timestamp: "2024-01-11T11:31:00Z",
      },
    ],
    created_at: "2024-01-11T11:30:00Z",
    updated_at: "2024-01-11T11:31:00Z",
  },
];
const freqQues = [
  { id: 1, ques: "Title of Question1?" },
  { id: 2, ques: "Title of Question2?" },
  { id: 3, ques: "Title of Question3?" },
  { id: 4, ques: "Title of Question4?" },
  { id: 5, ques: "Title of Question5?" },
  { id: 6, ques: "Title of Question6?" },
];
const freqSentences = [
  { id: 1, sentence: "No, it wasn't relevant" },
  { id: 2, sentence: "Explain more" },
  { id: 3, sentence: "Summarize" },
];
const actions = [
  { id: 1, title: "Go to the last program" },
  { id: 2, title: "Show all new programs" },
];

function ChatBox({
  onlyChatting = false,
  setLoading,
}: {
  onlyChatting?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedChat, setSelectedChat] = useState<ChatHistory>({
    id: 1,
    title: "Math question - Algebra",
    messages: [
      {
        id: 1,
        type: "question",
        content: "How do I solve quadratic equations?",
        timestamp: "2024-01-15T10:30:00Z",
      },
      {
        id: 2,
        type: "answer",
        content:
          "To solve quadratic equations, you can use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a. First, make sure your equation is in the form ax² + bx + c = 0, then identify a, b, and c values.",
        timestamp: "2024-01-15T10:31:00Z",
      },
      {
        id: 3,
        type: "question",
        content: "Can you show me an example?",
        timestamp: "2024-01-15T10:32:00Z",
      },
      {
        id: 4,
        type: "answer",
        content:
          "Sure! Let's solve x² + 5x + 6 = 0. Here a=1, b=5, c=6. Plugging into the formula: x = (-5 ± √(25-24)) / 2 = (-5 ± 1) / 2. So x = -2 or x = -3.",
        timestamp: "2024-01-15T10:33:00Z",
      },
      {
        id: 5,
        type: "question",
        content: "Can you show me an example?",
        timestamp: "2024-01-15T10:32:00Z",
      },
      {
        id: 6,
        type: "answer",
        content:
          "Sure! Let's solve x² + 5x + 6 = 0. Here a=1, b=5, c=6. Plugging into the formula: x = (-5 ± √(25-24)) / 2 = (-5 ± 1) / 2. So x = -2 or x = -3.",
        timestamp: "2024-01-15T10:33:00Z",
      },
    ],
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:33:00Z",
  });
  const [imgFile, setImgFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [promptValue, setPromptValue] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [newChatTitle, setNewChatTitle] = useState<string>("New Chat");
  const [lastAnswerAIID, setLastAnswerAIID] = useState<number | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  const [replyText, setReplyText] = useState("");
  const [responseForAction, setResponseForAction] = useState<{
    res: string;
    action: string;
  } | null>(null);

  // POST
  const { mutate: summerrizeMutation, isPending: isSummarizing } = useMutation({
    mutationFn: summarize,
    onSuccess: (data) => {
      console.log(data);
      setResponseForAction({
        res: data.data.data.response,
        action: "summerize",
      });
    },
    onError: (error) => {
      console.log(error);

      if (error instanceof AxiosError) {
        if (error.response?.data?.errors) {
          console.log(error.response.data.errors);
          toast.error(error.response.data.errors.text[0], {
            position: "top-center",
          });
        } else {
          toast.error(error.response?.data?.message || error?.message, {
            position: "top-center",
          });
        }
      } else {
        toast.error("An unknown error occurred.", { position: "top-center" });
      }
    },
  });
  const { mutate: questionMutation, isPending: isResponding } = useMutation({
    mutationFn: question,
    onSuccess: (data) => {
      console.log(data);
      setLoading?.(false);
      setResponseForAction({
        res: data.data.data.response,
        action: "question",
      });
    },
    onError: (error) => {
      console.log(error);
      setLoading?.(false);
      if (error instanceof AxiosError) {
        if (error.response?.data?.errors) {
          console.log(error.response.data.errors);
          toast.error(error.response.data.errors.text[0], {
            position: "top-center",
          });
        } else {
          toast.error(error.response?.data?.message || error?.message, {
            position: "top-center",
          });
        }
      } else {
        toast.error("An unknown error occurred.", { position: "top-center" });
      }
    },
  });

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
    setImgFile(file);
  };

  useEffect(() => {
    setLastAnswerAIID(
      selectedChat?.messages
        .slice() // make a copy to avoid mutating original
        .reverse()
        .find((msg) => msg.type === "answer")?.id ?? null // fallback to null
    );
    const container = messagesContainerRef.current;
    const end = endRef.current;
    if (container && end) {
      // scroll only inside the messages container
      end.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [selectedChat, responseForAction]);

  // Listen for global prompt set events
  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const detail = (e as CustomEvent<{ text: string; action: string }>)
          .detail;
        if (!detail || typeof detail.text !== "string") return;

        if (detail.action === "ask") {
          // setPromptValue(detail.text);
          setReplyText(detail.text);
        } else {
          if (detail.action === "summerize") {
            summerrizeMutation(detail.text);
          }

          setReplyText("");
        }
        if (inputRef.current) {
          inputRef.current.focus();
          requestAnimationFrame(() => {
            if (!inputRef.current) return;
            inputRef.current.style.height = "auto";
            inputRef.current.style.height =
              Math.min(inputRef.current.scrollHeight, 120) + "px";
          });
        }
      } catch {}
    };
    window.addEventListener("tuum:setPrompt", handler as EventListener);
    return () =>
      window.removeEventListener("tuum:setPrompt", handler as EventListener);
  }, []);

  return (
    <>
      {/* Header */}
      {!onlyChatting && (
        <div className="py-2 px-3 border-b border-outline-level0 flex items-center gap-3">
          {/* Hamburger Button */}
          <Button
            props={{
              value: "",
              leftIcon: "menu",
              rightIcon: "",
              type: "text",
              disabled: false,
              color: "red",
              width: 20,
              height: 20,
              size: "mobile-body-large md:body-large",
              clickHandler: () => setShowMenu((prev) => !prev),
            }}
          />

          <h2 className="body-medium text-txt-on-surface-secondary-light">
            {selectedChat ? (
              selectedChat.title
            ) : (
              <input
                className="p-1 outline-none body-medium text-txt-on-surface-secondary-light"
                type="text"
                value={newChatTitle}
                placeholder="New chat title..."
                onChange={(e) => setNewChatTitle(e.target.value)}
              />
            )}
          </h2>
        </div>
      )}

      {/* body */}
      <div className="flex flex-1 min-h-0 overflow-x-hidden">
        {/* Sidebar Menu */}
        <div
          className={`border-r border-outline-level0 overflow-y-auto no-scrollbar transition-all duration-300 ease-in-out ${
            showMenu
              ? "w-48 opacity-100 translate-x-0 p-3"
              : "w-0 opacity-0 -translate-x-full"
          }`}
        >
          <div
            className={`${
              showMenu ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200 delay-100 space-y-2`}
          >
            <div className="flex items-center justify-between">
              <h3 className="body-large font-semibold">Chats History</h3>{" "}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setSelectedChat(null);
                  setShowMenu(false);
                }}
              >
                +
              </div>
            </div>
            <ul className="space-y-2">
              {history.map(
                (item, idx) =>
                  item && (
                    <li
                      key={idx}
                      className={`p-2 rounded ${
                        selectedChat
                          ? selectedChat.id === item.id
                            ? "bg-statelayer-neutral-opacity-8"
                            : ""
                          : ""
                      } hover:bg-statelayer-neutral-opacity-4 cursor-pointer body-small transition-colors duration-200`}
                      onClick={() => {
                        setSelectedChat(item);
                        setShowMenu(false);
                      }}
                    >
                      {item.title}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        {/* Chat Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 flex flex-col overflow-y-auto no-scrollbar"
        >
          {selectedChat ? (
            <>
              <div className="flex-1 space-y-3 pt-4">
                {selectedChat.messages.map((message) => (
                  <Message
                    key={message.id}
                    msg={message}
                    msgSize={onlyChatting ? "body-large" : "body-small"}
                    setInputVal={setPromptValue}
                    lastAnswerAIId={lastAnswerAIID}
                  />
                ))}

                {isSummarizing || isResponding ? (
                  <div className="px-4">
                    <AILoader
                      text={
                        responseForAction?.action === "summerize"
                          ? "Summarizing"
                          : "Responding"
                      }
                    />
                  </div>
                ) : responseForAction?.res ? (
                  <Message
                    msg={{
                      id: -2,
                      type: "answer",
                      content: responseForAction?.res || "",
                      timestamp: "2025",
                    }}
                    msgSize={onlyChatting ? "body-large" : "body-small"}
                    setInputVal={setPromptValue}
                    lastAnswerAIId={-1}
                  />
                ) : null}
              </div>
              <div ref={endRef} />
            </>
          ) : (
            <div className="flex-1 p-4 space-y-3">
              <p className="body-medium text-on_surface-light">
                Frequently Questions
              </p>

              <div className="divide-y divide-outline-level0">
                {freqQues.map((fq) => (
                  <div
                    key={fq.id}
                    className="py-3 cursor-pointer"
                    onClick={() => setPromptValue(fq.ques)}
                  >
                    <h3 className="body-small text-txt-on-surface-secondary-light">
                      {fq.ques}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <footer className="space-y-2 pt-1">
        {/* quick access */}
        {!selectedChat && (
          <div className="space-y-2">
            <h5 className="label-medium text-txt-on-surface-terriary-light ml-3">
              Actions
            </h5>

            <DragScroll className="items-center gap-2">
              {actions.map((act, index) => (
                <div
                  key={act.id}
                  className={
                    index === 0
                      ? "ml-3"
                      : index === actions.length - 1
                      ? "mr-3"
                      : ""
                  }
                >
                  <Chips
                    chips={{
                      lable: `${act.title}`,
                      leftIcon: "",
                      rightIcon: "",
                      disabled: false,
                      type: "tonal",
                      width: 0,
                      height: 0,
                      padding: "py-1.5 px-4 body-large",
                    }}
                  />
                </div>
              ))}
            </DragScroll>
          </div>
        )}

        <div className="m-3">
          <AnimatePresence>
            {!!replyText && (
              <motion.div
                key="reply-chat"
                className="px-4 pt-2 pb-2.5 bg-surface0-light rounded-t-md flex items-center justify-between"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0584 15.2591H7.39176C5.09176 15.2591 3.2251 13.3924 3.2251 11.0924C3.2251 8.79245 5.09176 6.92578 7.39176 6.92578H16.5584"
                        stroke="#484647"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.6416 9.00885L16.7749 6.87552L14.6416 4.74219"
                        stroke="#484647"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <span className="max-h-20 overflow-auto text-justify body-large text-txt-on-surface-secondary-light">
                    {replyText}
                  </span>
                </div>

                <div className="min-w-9 min-h-9">
                  <Button
                    props={{
                      value: "",
                      leftIcon: "close-circle",
                      rightIcon: "",
                      type: "text",
                      disabled: false,
                      color: "red",
                      width: 20,
                      height: 20,
                      size: "mobile-body-large md:body-large",
                      clickHandler: () => setReplyText(""),
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="border border-outline-level0 rounded-md p-1.5 -mt-1 bg-white space-y-2 z-10">
            {preview && (
              <div className="relative w-fit">
                <Image
                  className="w-10 h-10 object-cover rounded-lg"
                  src={preview}
                  alt={imgFile ? imgFile.name : "preview"}
                  width={40}
                  height={40}
                />

                <div
                  className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center text-sm text-center cursor-pointer"
                  onClick={() => {
                    setPreview(null);
                    setImgFile(null);
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#170304"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.17188 14.8299L14.8319 9.16992"
                      stroke="#170304"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.8319 14.8299L9.17188 9.16992"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full">
                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleChange}
                />
                <Button
                  props={{
                    value: "",
                    leftIcon: "gallery-add",
                    rightIcon: "",
                    type: "text",
                    disabled: false,
                    color: "red",
                    width: 20,
                    height: 20,
                    size: "mobile-body-large md:body-large",
                    padding: "p-2.5",
                    clickHandler: () => handleClick(),
                  }}
                />

                {/* Input */}
                <textarea
                  className="flex-1 body-medium focus:outline-none placeholder:text-semantics-on-surface-tertiary resize-none max-h-30 overflow-y-auto"
                  value={promptValue}
                  onChange={(e) => setPromptValue(e.target.value)}
                  placeholder="prompt text..."
                  rows={1}
                  style={{
                    height: "auto",
                    maxHeight: "120px",
                  }}
                  ref={inputRef}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height =
                      Math.min(target.scrollHeight, 120) + "px";
                  }}
                />
              </div>

              <Button
                props={{
                  value: "",
                  leftIcon: "send",
                  rightIcon: "",
                  type: "filled",
                  disabled: isResponding,
                  color: "red",
                  width: 20,
                  height: 20,
                  size: "mobile-body-large md:body-large bg-gradient-to-b from-[#F78B5D] to-[#CE6312]",
                  padding: "p-2.5",
                  clickHandler: () => {
                    if (setLoading) {
                      setLoading(true);
                    }

                    questionMutation(promptValue);
                  },
                }}
              />
            </div>
          </div>
        </div>

        <h6 className="label-small text-txt-on-surface-terriary-light text-center m-3">
          Responses from AI
        </h6>
      </footer>
    </>
  );
}

export default ChatBox;

function Message({
  msg,
  msgSize,
  setInputVal,
  lastAnswerAIId,
}: {
  msg: ChatMessage;
  msgSize: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  lastAnswerAIId: number | null;
}) {
  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(msg.content);
        toast.success("Copied to clipboard");
      } else {
        // Fallback for mobile devices or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = msg.content;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          toast.success("Copied to clipboard");
        } catch (err) {
          console.error("Fallback copy failed: ", err);
        }

        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error("Failed to copy content: ", err);
    }
  };

  return (
    <div className="space-y-2" data-message-type={msg.type}>
      <div className="space-y-0.5 px-4">
        <div
          className={`rounded-lg p-2 ${
            msg.type === "question" ? "bg-surface0-light" : "space-x-2"
          }`}
        >
          {msg.type === "answer" && (
            <Image
              className="w-5.5 h-5.5 inline"
              src="/tuum/tuum-logo.svg"
              alt="tuum logo"
              width={22}
              height={22}
            />
          )}
          <p
            className={`inline ${msgSize} text-txt-on-surface-secondary-light text-justify`}
          >
            {msg.content}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 ${
            msg.type === "answer" ? "justify-start" : "justify-end"
          }`}
        >
          <Button
            props={{
              value: "",
              leftIcon: "clipboard",
              rightIcon: "",
              type: "text",
              disabled: false,
              color: "red",
              width: 16,
              height: 16,
              size: "mobile-body-large md:body-large",
              clickHandler: handleCopy,
            }}
          />

          {msg.type === "answer" && (
            <Button
              props={{
                value: "",
                leftIcon: "share1",
                rightIcon: "",
                type: "text",
                disabled: false,
                color: "red",
                width: 16,
                height: 16,
                size: "mobile-body-large md:body-large",
              }}
            />
          )}
        </div>
      </div>

      {/* frequently sentences */}
      {lastAnswerAIId && lastAnswerAIId === msg.id && (
        <div className="space-y-2">
          <h5 className="label-medium text-txt-on-surface-terriary-light pl-6">
            Did you find the answer to your question?
          </h5>

          <DragScroll className="items-center gap-2">
            {freqSentences.map((fs, index) => (
              <div
                key={fs.id}
                className={
                  index === 0
                    ? "pl-6"
                    : index === freqSentences.length - 1
                    ? "pr-6 "
                    : ""
                }
                onClick={() => setInputVal(fs.sentence)}
              >
                <Chips
                  chips={{
                    lable: `${fs.sentence}`,
                    leftIcon: "",
                    rightIcon: "",
                    disabled: false,
                    type: "tonal",
                    width: 0,
                    height: 0,
                    padding: "py-1.5 px-4 body-large",
                  }}
                />
              </div>
            ))}
          </DragScroll>
        </div>
      )}
    </div>
  );
}