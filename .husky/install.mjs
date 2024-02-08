// Skip Husky install in production and CI
const installHusky = async () => {
  try {
    (await import("husky")).default();
    console.log("Husky installed successfully");
  } catch (error) {
    console.error("Error installing Husky:", error);
    process.exit(1);
  }
};

const isProduction = () => process.env.NODE_ENV === "production";

const isCI = () => process.env.CI === "true";

if (isProduction() || isCI()) {
  console.log("Skipping Husky installation in production or CI environment.");
  process.exit(0);
} else {
  installHusky();
}
