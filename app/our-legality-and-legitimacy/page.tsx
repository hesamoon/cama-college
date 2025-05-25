function page() {
  return (
    <div className="grid-system-level3 space-y-10 py-10">
      {/* title */}
      <div className="space-y-4">
        <h2 className="title-large text-on_surface-light">Title</h2>

        <div className="flex items-center gap-1 label-medium text-txt-on-surface-terriary-light">
          <span>Last update:</span>
          <span>12 hours ago</span>
        </div>
      </div>

      {/* title & description 1 */}
      <div className="space-y-3">
        <h4 className="title-medium text-on_surface-light">Title</h4>
        <p className="body-large text-txt-on-surface-secondary-light text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum.{" "}
          <span className="relative text-[#A91418] before:content-[''] before:absolute before:bottom-0.5 before:left-0 before:right-0 before:h-[0.5em] before:bg-[#A9141829] before:-z-10">
            Ullamcorper
          </span>{" "}
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed
        </p>
      </div>

      {/* title & description 2 */}
      <div className="space-y-3">
        <h4 className="title-medium text-on_surface-light">Title</h4>
        <div className="body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
