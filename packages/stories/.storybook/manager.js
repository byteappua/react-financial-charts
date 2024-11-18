import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "light",
        brandTitle: "React Financial Charts",
        brandUrl: "https://github.com/byteappua/react-financial-charts",
    }),
});
