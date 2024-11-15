export const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  animation: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.18);
    }`,
  },
  footer: {
    textAlgin: "center",
  },
};
