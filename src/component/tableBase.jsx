import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { IoCopySharp } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa";

const columns = [
  { id: "token", label: "Token", minWidth: 150 },
  { id: "age", label: "Age", minWidth: 80, align: "center" },
  { id: "liqMC", label: "Liq/MC", minWidth: 100, align: "right" },
  { id: "blueChip", label: "BlueChip", minWidth: 100, align: "right" },
  { id: "holders", label: "Holders", minWidth: 100, align: "right" },
  { id: "smartKol", label: "Smart/KOL", minWidth: 100, align: "right" },
  { id: "oneMTXs", label: "1m TXs", minWidth: 100, align: "right" },
  { id: "oneHVol", label: "1h Vol", minWidth: 100, align: "right" },
  { id: "price", label: "Price", minWidth: 100, align: "right" },
  { id: "oneM", label: "1m%", minWidth: 100, align: "right" },
  { id: "fiveM", label: "5m%", minWidth: 100, align: "right" },
  { id: "oneH", label: "1h%", minWidth: 100, align: "right" },
  { id: "degenAudit", label: "Degen Audit", minWidth: 100, align: "center" },
  { id: "action", label: "Action", minWidth: 80, align: "center" },
];

function createData(
  token,
  age,
  liqMC,
  blueChip,
  holders,
  smartKol,
  oneMTXs,
  oneHVol,
  price,
  oneM,
  fiveM,
  oneH,
  degenAudit
) {
  return {
    token,
    age,
    liqMC,
    blueChip,
    holders,
    smartKol,
    oneMTXs,
    oneHVol,
    price,
    oneM,
    fiveM,
    oneH,
    degenAudit,
  };
}

const rows = [
  createData(
    // "AI",
    "5m",
    "62.7K",
    "0%",
    "361",
    "--",
    "79",
    "$36.7K",
    "$0.0555",
    "+42.8%",
    "+50%",
    "+50%",
    "Yes"
  ),
  createData(
    // "OLR",
    "1m",
    "14.3K",
    "0%",
    "105",
    "--",
    "153",
    "$18.5K",
    "$0.3112",
    "+24.9%",
    "+38%",
    "+385%",
    "Yes"
  ),
  createData(
    // "Kantabanji",
    "4m",
    "15.3K",
    "1.9%",
    "104",
    "--",
    "93",
    "$20.7K",
    "$0.2055",
    "-25.3%",
    "+20.5%",
    "+205.7%",
    "Yes"
  ),
  createData(
    // "Maria",
    "19m",
    "103.5K",
    "1.2%",
    "1.3K",
    "3/4",
    "219",
    "$81.5K",
    "$0.0006",
    "+24.7%",
    "+54.5%",
    "+9.4%",
    "Yes"
  ),
];

export default function StickyHeadTable() {
  const handleBuyClick = (token) => {
    console.log(`Buy button clicked for ${token}`);
  };
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1e1e2d",
        color: "white",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#27293d",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.token}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        color: "white",
                        maxWidth: column.id === "token" ? 200 : "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {column.id === "token" ? (
                        <div
                          className="flex items-center gap-3"
                          style={{ maxWidth: "100%" }}
                        >
                          <div className="relative w-12 h-12">
                            <img
                              src={`https://robohash.org/${row.token}.png?set=set3`}
                              alt=""
                              className="w-full h-full rounded-full object-cover"
                            />

                            <img
                              src={`https://robohash.org/${row.token}.png?set=set4`}
                              alt=""
                              className="absolute w-4 h-4 rounded-full object-cover border-2 border-white"
                              style={{
                                bottom: 0,
                                right: 0,
                              }}
                            />
                          </div>

                          <div
                            className="flex flex-col"
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              className="flex items-center gap-0"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <span className="font-semibold truncate">
                                {row.token}
                              </span>

                              <Button
                                size="small"
                                style={{
                                  minWidth: 0,
                                  padding: "2px 4px",
                                }}
                              >
                                <IoCopySharp style={{ fontSize: "12px" }} />
                              </Button>

                              <Button
                                size="small"
                                style={{
                                  minWidth: 0,
                                  padding: "2px 4px",
                                }}
                              >
                                <FaSearchengin style={{ fontSize: "12px" }} />
                              </Button>
                            </div>
                            <div
                              className="flex items-center gap-0"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <div>
                                <a
                                  className="text-gray-400 text-sm relative"
                                  style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    cursor: "pointer",
                                  }}
                                  onMouseEnter={() => setShowTooltip(true)}
                                  onMouseLeave={() => setShowTooltip(false)}
                                >
                                  {row.token.length > 10
                                    ? `${row.token.substring(0, 10)}...`
                                    : row.token}
                                </a>

                                {showTooltip && (
                                  <div
                                    style={{
                                      position: "fixed",
                                      bottom: "10px",
                                      left: "50%",
                                      transform: "translateX(-50%)",
                                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                                      color: "white",
                                      padding: "5px 10px",
                                      borderRadius: "5px",
                                    }}
                                  >
                                    {row.token}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : column.id === "action" ? (
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={() => handleBuyClick(row.token)}
                        >
                          Buy
                        </Button>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
