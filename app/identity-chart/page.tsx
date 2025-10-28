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
          The Identity Chart of Canada Management College
        </h2>

        {/* title & description 1 */}
        <div className="space-y-3">
          {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Title
          </h4> */}
          <p className="mobile-body-large md:body-large text-txt-on-surface-secondary-light text-justify">
            As far as our core identity as Canada Management College is
            concerned, it can be divided into three main categories, namely,
            Academic Identity, Social Identity and Professional Identity.
          </p>
        </div>

        {/* title & description 2 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Our Academic Identity
          </h4>
          <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              As an educational establishment proud of its roots and fruits, we
              decided to formulate our own scientific configuration of what we
              believed was necessary for the dynamic growth of Management as
              well as a wide variety of its subcategories or neighboring
              branches including – but not limited to – Marketing,
              Entrepreneurship, Economics, Operations, International Management,
              Supply Chain Management, etc. In other words, we believed a
              multidisciplinary approach must be added to these areas. The
              disciplines we deemed necessary were mainly divided into two
              categories.
            </p>
          </div>
        </div>

        {/* title & description 3 */}
        <div className="space-y-3">
          {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            title
          </h4> */}
          <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              The first category is a handpicked tapestry of knowledge from
              Formal Sciences including Computer Sciences, Data and Information
              Sciences, and Logic. The second category has the same manner of
              selection. However, while the first category leads to perfection
              by adding a technological, formalist, futuristic and computational
              touch, the second category seeks to add a more Humanities-based
              touch using excerpts from the literature of Psychology,
              Anthropology and Sociology. Additionally, Linguistics is in our
              multidisciplinary approach since it possesses paradigms of both
              categories.
            </p>
          </div>
        </div>

        {/* title & description 4 */}
        <div className="space-y-3">
          {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
           title
          </h4> */}
          <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              To sum up, the main difference between the multidisciplinary
              approach of Management Sciences – that underlies CAMA College’s
              academic identity – and other such interdisciplinary endeavors is
              perhaps that we abstained from blindly ploughing through the
              depths of the so-called added fields. Instead, we picked and
              chose, sometimes from the depths and sometimes from the surface.
              We selected as much as needed, so as to prove efficiently
              paradigm-shifting and generatively illuminating.
            </p>
          </div>
        </div>

        {/* title & description 5 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Our Social Identity
          </h4>
          <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              We believe our surrounding society to be both local and global.
              With our Philanthropic Arm, not only are we planning on donating
              certain portions of our proceeds to different charities, we are
              also going to hold courses – and hopefully organize other forms of
              events – to aid locally and globally scattered immigrants,
              minorities, underprivileged populations and other deserving
              individuals to gain the necessary tools and realize their true
              potential, thus fulfilling their own self-actualization while also
              being deservedly more productive members of their community.
            </p>
          </div>
        </div>

        {/* title & description 6 */}
        <div className="space-y-3">
          {/* <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            title
          </h4> */}
          <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              Moreover, our social identity is also defined by our Motivational
              Arm. Our Motivational Arm is firstly the wisdom the we believe
              everyone needs to possess. The wisdom that we simultaneously try
              to vocalize for everyone and formulate into educational contents
              for our students so that this wisdom can be verbalized into
              courses and other active, proactive and interactive efforts.
            </p>
          </div>
        </div>

        {/* title & description 7 */}
        <div className="space-y-3">
          <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
            Our Professional Identity
          </h4>
          <div className="mobile-body-large md:body-large text-txt-on-surface-secondary-light space-y-2 text-justify">
            <p>
              Last but certainly not the least, the team of CAMA College
              contains individuals who have reached the heights of perfection in
              their carriers. And, as a management college, we will not allow
              ourselves – nor will we be allowed by official governing bodies –
              to exist unless we have and embody the credentials and experiences
              necessary. Therefore, it is only logical for such an entity to not
              only teach the methods of these fields – and doing so innovatively
              – but also conduct the actual business advisory work and a
              consultative practice.
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
