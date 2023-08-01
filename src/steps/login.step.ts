import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pages/login.page.ts";
import SecurePage from "../pages/secure.page.ts";
import Page from "../pages/page.ts";

interface Pages {
  [index: string]: Page;
}

const pages: Pages = {
  login: LoginPage,
};

Given("I am on the {string} page", async (page: string) => {
  await pages[page].open("/login");
});

When(
  "I login with {string} and {string}",
  async (username: string, password: string) => {
    await LoginPage.login(username, password);
  }
);

Then(
  "I should see a flash message saying {string}",
  async (message: string) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
  }
);
