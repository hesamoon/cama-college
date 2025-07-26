"use client";

import { useEffect, useRef, useState } from "react";

// types
import { Node } from "../types/types";

// utils
import { parseStyledText } from "@/utilities/utils";

// data
import { orgChart } from "@/constants/data";

function page() {
  return (
    <div className="space-y-10 py-4 md:py-10">
      <div className="mobile-grid-system-level0 md:grid-system-level3 space-y-10">
        {/* title */}
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Title
        </h2>

        {/* title & description 1 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Title
          </h4>
          <p className="mobile-body-large md:body-large text-txt-on-surface-secondary-light text-justify">
            {parseStyledText(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. @(*Ullamcorper*)@ velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
            )}
          </p>
        </div>

        {/* title & description 2 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Title
          </h4>
          <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              {parseStyledText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
              )}
            </p>
            <p>
              {parseStyledText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
              )}
            </p>
          </div>
        </div>
      </div>

      {/* chart */}
      <OrgChart />
    </div>
  );
}

export default page;

function OrgChart() {
  return (
    <div className="md:grid-system-level1 overflow-auto px-4">
      <TreeNode node={orgChart} />
    </div>
  );
}

function TreeNode({ node }: { node: Node }) {
  const hasChildren = node.children && node.children.length > 0;

  const nodeRef = useRef<HTMLDivElement | null>(null);

  const [size, setSize] = useState(0);

  useEffect(() => {
    if (nodeRef.current) {
      const { width } = nodeRef.current.getBoundingClientRect();
      setSize(width - (40 / 100) * width);
    }
  }, []);

  return (
    <div
      ref={nodeRef}
      className="flex flex-col items-center relative px-2 mt-2"
    >
      {/* Node box */}
      <div className="mobile-label-large-db md:label-large-db flex items-center justify-center border border-gray-300 rounded text-center px-4 py-2 w-40 h-16">
        {node.name}
      </div>

      {hasChildren && (
        <>
          {/* Vertical line down from current node */}
          <div className={`flex flex-col items-center mt-2`}>
            <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
            <div className="h-8 w-px bg-outline-level2" />
            {(node.children!.length === 1 || node.children!.length === 3) && (
              <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
            )}
          </div>

          {/* Horizontal line and children */}
          <div
            className="relative grid grid-cols-3"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${node.children?.length}, minmax(0, 1fr))`,
            }}
          >
            {/* horizontal line center connector */}
            {node.children!.length > 1 && (
              <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 h-px flex items-center bg-outline-level2">
                <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
                <div
                  className="h-px bg-outline-level2"
                  style={{
                    width: `${size}px`,
                  }}
                />
                <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
              </div>
            )}

            {/* children */}
            {node.children!.map((child, index) => (
              <TreeNode key={index} node={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
