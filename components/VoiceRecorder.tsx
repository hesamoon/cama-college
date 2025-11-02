"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import Button from "./Button";

export default function VoiceRecorder({
  setShowVoiceOverlay,
}: {
  setShowVoiceOverlay: (show: boolean) => void;
}) {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Uint8Array | null>(null);

  const [scale, setScale] = useState(1);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // ✅ setup recorder
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      chunks.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: "audio/webm" });
      chunks.current = [];
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
      setScale(1);
      setRecording(false); // reset blob when stopped
      analyserRef.current = null;
      dataRef.current = null;
      audioContext.close();
      stream.getTracks().forEach((track) => track.stop());
    };

    // ✅ setup audio analyser for live volume detection
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyserRef.current = analyser;

    const bufferLength = analyser.frequencyBinCount;
    const arrayBuffer = new ArrayBuffer(bufferLength);
    const dataArray = new Uint8Array(arrayBuffer);
    dataRef.current = dataArray;
    source.connect(analyser);

    // ✅ animation loop for blob movement
    const animate = () => {
      if (!analyserRef.current || !dataRef.current) return;

      // @ts-expect-error - TypeScript's Web Audio API types are overly strict about ArrayBuffer vs ArrayBufferLike
      // In practice, getByteFrequencyData works correctly with any Uint8Array instance
      analyserRef.current.getByteFrequencyData(dataRef.current);

      const volume =
        dataRef.current.reduce((a, b) => a + b, 0) / dataRef.current.length;

      // adjust sensitivity (lower divisor = bigger movement)
      setScale(1 + volume / 150);

      requestAnimationFrame(animate);
    };

    animate();
    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  return (
    <motion.div
      className="absolute inset-0 z-50 bg-white flex flex-col justify-between rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* 🎤 BLOB ANIMATED */}
      <motion.div
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 90, damping: 12 }}
        className="flex justify-center mt-10"
      >
        <Image
          src="/image-record-voice.svg"
          alt="record-blob"
          width={400}
          height={400}
        />
        {/* <Image
        className="absolute top-1/2 left-[45%] -translate-y-1/2"
          src="/tuum/tuum-logo.svg"
          alt="tuum logo"
          width={99}
          height={97}
        /> */}
      </motion.div>

      <div>
        {audioURL && (
          <div className="p-4">
            <audio controls src={audioURL}></audio>
          </div>
        )}

        <div className="p-4 flex items-center justify-center gap-2">
          {/* Mic Button */}
          <Button
            props={{
              value: "",
              leftIcon: recording ? "pause" : "microphone",
              rightIcon: "",
              type: "text",
              disabled: false,
              color: "red",
              width: 32,
              height: 32,
              size: "mobile-body-large md:body-large bg-[#A9141814]",
              padding: "p-4",
              clickHandler: () =>
                recording ? stopRecording() : startRecording(),
            }}
          />

          {/* Close Button */}
          <Button
            props={{
              value: "",
              leftIcon: "close-circle",
              rightIcon: "",
              type: "text",
              disabled: false,
              color: "red",
              width: 32,
              height: 32,
              size: "mobile-body-large md:body-large bg-[#A9141814]",
              padding: "p-4",
              clickHandler: () => {
                stopRecording();
                setShowVoiceOverlay(false);
              },
            }}
          />
        </div>

        <h6 className="label-small text-txt-on-surface-terriary-light text-center m-3">
          Responses from AI
        </h6>
      </div>
    </motion.div>
  );
}
