const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
    "&:hover, &:focus": {
        outline: "transparent",
    },
    "@media (max-width: 768px)": {
        width: "95vw",
        p: 2,
    }
  };

  export default style;