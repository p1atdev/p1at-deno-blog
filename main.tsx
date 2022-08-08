/** @jsx h */

import blog, { ga, redirects, h } from "https://deno.land/x/blog@0.4.2/blog.tsx"

// deno_blog 神

blog({
    title: "Plat Dev",
    description: "メモとか備忘録とか。ちゃんとしたとこには書けないようなこととか。",
    avatar: "https://avatars.githubusercontent.com/u/60182057",
    avatarClass: "rounded-full",
    author: "Plat",
    links: [
        { title: "GitHub", url: "https://github.com/p1atdev", target: "_blank" },
        { title: "Twitter(鍵)", url: "https://twitter.com/p1atdev", target: "_blank" },
        {
            title: "Zenn",
            url: "https://zenn.dev/platina",
            icon: <img src="https://zenn.dev/images/logo-transparent.png" class="grayscale w-4 h-4" />,
            target: "_blank",
        },
    ],
    lang: "ja",

    middlewares: [
        // ga("UA-XXXXXXXX-X"),
    ],
})
