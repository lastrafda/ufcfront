import * as React from "react";

// TODO: USE CSS GRID IN ALL RESOLUTIONS
export const Rankings: React.FunctionComponent<unknown> = () => {
  return (
    <main className="bg-gray-800 p-4 text-white font-bold">
      <h1 className="text-yellow-500 text-xl font-extrabold py-4">Rankings</h1>
      <section className="grid">
        {/* Start of the rank component */}
        <article>
          <h2 className="py-4"># Men&apos;s Pound for pound</h2>
          <ol>
            {/* border-2 border-purple-800 rounded-lg */}
            <li className="p-4 mb-2 justify-between border rounded-lg border-transparent bg-gray-700">
              <div className="inline-flex w-full justify-between">
                <div className="rank-1"> Khalabib -Joey Diaz</div>
                <div>29-0-0</div>
              </div>
            </li>
            <li className="p-4 mb-2 border rounded-lg border-transparent bg-gray-700">
              Jon Jones (v/)(v/)(v/)
            </li>
            <li className="p-4 border rounded-lg border-transparent bg-gray-700">
              Stipe (x)(v/)(v/)
            </li>
          </ol>
        </article>
        {/* End of the rank component */}
      </section>
    </main>
  );
};
