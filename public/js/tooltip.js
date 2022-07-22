const applyTooltip = (button, tooltip, placement = "bottom-end") => {
  Popper.createPopper(button, tooltip, {
    placement,
  });
  button.addEventListener("mouseenter", (event) => {
    tooltip.removeAttribute("hidden");
  });
  button.addEventListener("mouseleave", (event) => {
    tooltip.setAttribute("hidden", "");
  });
};
applyTooltip(
  document.querySelector("#tooltip-trigger-currency"),
  document.querySelector("#tooltip-currency")
);
applyTooltip(
  document.querySelector("#tooltip-trigger-language"),
  document.querySelector("#tooltip-language")
);
applyTooltip(
  document.querySelector("#tooltip-trigger-account"),
  document.querySelector("#tooltip-account")
);
