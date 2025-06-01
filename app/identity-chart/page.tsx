// types
import { parseStyledText } from "@/utilities/utils";
import { Node } from "../types/types";

// data
import { orgChart } from "@/constants/data";

function page() {
  return (
    <div className="grid-system-level3 space-y-10 py-10">
      {/* title */}
      <h2 className="title-large text-on_surface-light">Title</h2>

      {/* title & description 1 */}
      <div className="space-y-3">
        <h4 className="title-medium text-on_surface-light">Title</h4>
        <p className="body-large text-txt-on-surface-secondary-light text-justify">
          {parseStyledText(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. @(*Ullamcorper*)@ velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed "
          )}
        </p>
      </div>

      {/* title & description 2 */}
      <div className="space-y-3">
        <h4 className="title-medium text-on_surface-light">Title</h4>
        <div className="body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
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

      {/* chart */}
      <OrgChart />
    </div>
  );
}

export default page;

function OrgChart() {
  return (
    <div className="overflow-auto flex justify-center py-10 px-4">
      <TreeNode node={orgChart} />
    </div>
  );
}

function TreeNode({ node }: { node: Node }) {
  return (
    <div className="flex flex-col items-center relative label-large-db text-txt-on-surface-secondary-light flex-1">
      <div className="flex items-center justify-center p-2 rounded border border-outline-level0 text-center w-32 h-16">
        {node.name}
      </div>

      {/* Lines to children */}
      {node.children && node.children.length > 0 && (
        <div className="flex items-center mt-2 relative">
          {/* vertical line */}
          <div className="flex flex-col items-center absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
            <div className="h-8 w-px bg-outline-level2" />
            <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
          </div>

          {/* horizontal connector line */}
          {node.children.length > 1 && (
            <div className="flex items-center absolute top-[2.55rem] w-full h-px bg-outline-level2">
              <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
              <div className="w-full h-px bg-outline-level2" />
              <div className="w-1.5 h-1.5 bg-outline-level2 rounded-full" />
            </div>
          )}

          <div className="flex justify-center gap-4 pt-12">
            {node.children.map((child, idx) => (
              <TreeNode key={idx} node={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
