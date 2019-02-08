import React from "react"

import { storiesOf } from "@storybook/react"

import { Block } from "../src"

storiesOf("Block", module).add("Basic", () => [
  <Block variant="default" mb={16}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit impedit
    veritatis ipsum facilis rem, nulla esse aliquid corporis, hic consectetur?
    Eum illum necessitatibus aperiam explicabo vel nisi nam et placeat?
  </Block>,

  <Block variant="secondary" mb={16}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate
    consectetur, temporibus qui ipsam. Ipsam accusantium cum quis facere
    molestias est, totam officia impedit autem, alias asperiores illum eligendi
    iusto.
  </Block>,

  <Block variant="primary" mb={16}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nostrum,
    assumenda quisquam dolores atque explicabo ducimus vitae perferendis,
    consectetur eligendi aperiam voluptas architecto fugit cumque. Distinctio,
    temporibus exercitationem dignissimos nesciunt!
  </Block>,

  <Block variant="error" mb={16}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nostrum,
    assumenda quisquam dolores atque explicabo ducimus vitae perferendis,
    consectetur eligendi aperiam voluptas architecto fugit cumque. Distinctio,
    temporibus exercitationem dignissimos nesciunt!
  </Block>,

  <Block variant="success" mb={16}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nostrum,
    assumenda quisquam dolores atque explicabo ducimus vitae perferendis,
    consectetur eligendi aperiam voluptas architecto fugit cumque. Distinctio,
    temporibus exercitationem dignissimos nesciunt!
  </Block>,

  <Block variant="warning" mb={16}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nostrum,
    assumenda quisquam dolores atque explicabo ducimus vitae perferendis,
    consectetur eligendi aperiam voluptas architecto fugit cumque. Distinctio,
    temporibus exercitationem dignissimos nesciunt!
  </Block>,
])
