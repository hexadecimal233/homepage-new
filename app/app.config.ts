export default defineAppConfig({
  ui: {
    colors: {
      primary: "pink",
      neutral: "gray",
    },
    separator: {
      defaultVariants: {
        color: "neutral",
        size: "xl",
        type: "dashed",
      },
    },
    container: {
      base: "flex flex-col rounded-2xl border-2 border-neutral-300 shadow-2xl lg:flex-row dark:border-neutral-800",
    },
  },
})
