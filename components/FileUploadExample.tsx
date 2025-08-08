"use client";

import FileUpload from "./FileUpload";

function FileUploadExample() {
  const handleFileSend = (file: File) => {
    console.log("File sent:", file.name, file.size, file.type);
    // Here you would typically upload the file to your server
    // Example: uploadFile(file);
  };

  const handleFileSelect = (file: File) => {
    console.log("File selected:", file.name);
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-xl font-semibold">File Upload Examples</h2>
      
      {/* Basic file upload */}
      <div className="space-y-2">
        <h3 className="text-lg">Basic File Upload</h3>
        <FileUpload
          buttonText="Send Document"
          onSend={handleFileSend}
          onFileSelect={handleFileSelect}
          showFileName={true}
        />
      </div>

      {/* Custom button styling */}
      <div className="space-y-2">
        <h3 className="text-lg">Custom Button Styling</h3>
        <FileUpload
          buttonText="Upload CV"
          buttonProps={{
            type: "outlined",
            color: "red",
            padding: "px-8 py-3",
            size: "body-large",
          }}
          onSend={handleFileSend}
          onFileSelect={handleFileSelect}
          showFileName={true}
        />
      </div>

      {/* Different file types */}
      <div className="space-y-2">
        <h3 className="text-lg">Image Upload (Different File Types)</h3>
        <FileUpload
          buttonText="Upload Image"
          accept=".jpg,.jpeg,.png,.gif"
          maxSize={2 * 1024 * 1024} // 2MB
          onSend={(file) => {
            console.log("Image uploaded:", file.name);
          }}
          onFileSelect={handleFileSelect}
          showFileName={true}
        />
      </div>
    </div>
  );
}

export default FileUploadExample; 