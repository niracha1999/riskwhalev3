import { MainMenu } from "../components/MainMenu";

import React, { useState } from "react";
import axios from "axios";

const color = [
  "green",
  "orange",
  "red",
  "red",
  "red",
  "green",
  "yellow",
  "orange",
  "red",
  "red",
  "green",
  "lightgreen",
  "yellow",
  "orange",
  "red",
  "green",
  "lightgreen",
  "yellow",
  "yellow",
  "red",
  "green",
  "green",
  "lightgreen",
  "lightgreen",
  "yellow",
];

export default function RiskMatrix() {
  return (
    <div>
      <MainMenu />

      <>
        <table>
          {[0, 1, 2, 3, 4].map((value) => (
            <tr>
              {[1, 2, 3, 4, 5].map((value2) => {
                const number = 5 * value + value2;
                const row = data.box.filter((item) => item.value === number);
                return (
                  <td
                    style={{
                      backgroundColor: color[number - 1],
                      width: 100,
                      height: 100,
                      overflow: "auto",
                    }}
                  >
                    {row.map((data) => (
                      <div style={{ marginBottom: 8 }}>{data.risk}</div>
                    ))}
                  </td>
                );
              })}
            </tr>
          ))}
        </table>
      </>
    </div>
  );
}
