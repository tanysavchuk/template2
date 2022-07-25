const applyTooltip = (button, tooltip, placement = "bottom-end") => {
  const popper = Popper.createPopper(button, tooltip, {
    placement,
  });
  button.addEventListener("mouseenter", (event) => {
    tooltip.removeAttribute("hidden");
  });
  button.addEventListener("mouseleave", (event) => {
    tooltip.setAttribute("hidden", "");
  });
  tooltip.addEventListener("click", (event) => {
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
applyTooltip(
  document.querySelector("#tooltip-trigger-currency-mobile-menu"),
  document.querySelector("#tooltip-currency-mobile-menu"),
  "bottom-start"
);
applyTooltip(
  document.querySelector("#tooltip-trigger-language-mobile-menu"),
  document.querySelector("#tooltip-language-mobile-menu"),
  "bottom-start"
);
applyTooltip(
  document.querySelector("#tooltip-trigger-account-mobile-menu"),
  document.querySelector("#tooltip-account-mobile-menu")
);
