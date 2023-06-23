import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    width: "81vw",
    padding: 40,
});

export const trelloHeader = style({
    paddingBottom: 20,
    width: "100%",
    textAlign: "center",
    marginBottom: 40,
    borderBottom: `1px solid ${vars.colors.borderColor}`,
});

export const boardsHeader = style({
    fontWeight: 400,
    marginBottom: 40,
});

export const boards = style({
    position: "relative",
    width: "80%",
    margin: "0 auto",
});

export const cards = style({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
});

export const button = style({
    fontSize: "0.9rem",
    width: "23%",
    padding: "36px 0",
    margin: "0 10px 10px 0",
    cursor: "pointer",
    border: "none",
    borderRadius: 3,
    transition: "0.1s ease",
    ":hover": {
        backgroundColor: "#e0e0e0",
    },
    ":active": {
        backgroundColor: "#bbbbbb",
    },
});