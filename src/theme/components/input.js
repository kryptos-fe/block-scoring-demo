import { mode } from "@chakra-ui/theme-tools";
export const inputStyles = {
  components: {
    Input: {
      baseStyle: {
        field: {
          fontWeight: 400,
        },
      },

      variants: {
        auth: (props) => ({
          field: {
            bg: mode("white", "navy.700")(props),
            border: "1px solid",
            borderColor: mode("gray.200", "transparent")(props),
            _placeholder: { color: mode("gray.300", "gray.400")(props) },
          },
        }),
        search: (props) => ({
          field: {
            border: "none",
            backgroundColor:'rgba(255, 255, 255, 0.2)',
            borderRadius: 4,
            _placeholder: { color: mode("gray.300", "gray.400")(props),fontSize:12 },
            _focus:{border:'2px solid rgba(255, 255, 255, 0.4)'}
          },
        }),
      },
    },
  },
};
