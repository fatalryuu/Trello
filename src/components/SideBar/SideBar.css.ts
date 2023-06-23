import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    width: "15vw",
    borderRight: `1px solid ${vars.colors.borderColor}`,
});

export const trelloHeader = style({
    borderBottom: `1px solid ${vars.colors.borderColor}`,
    marginBottom: 10,
    textAlign: "center",
    padding: 10,
});

export const active = style({
    backgroundColor: "#cccccc",
});

export const element = style({
    display: "flex",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    padding: "5px 10px",
    alignItems: "center",
    fontSize: "1.2rem",
    ":hover": {
        backgroundColor: "#ececec",
    },
    ":active": {
        backgroundColor: "#cccccc",
    },
});

export const text = style({
    marginLeft: 10,
    fontWeight: 400,
});

export const boardsHeader = style({
    padding: "5px 10px 5px 10px",
    fontSize: "1.2rem",
});