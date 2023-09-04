import {randomButton, primeNumButton, clearButton} from "./src/importer.js";
import {randomButtonHandler, primeNumButtonHandler, clearButtonHandler} from "./src/events.js";

randomButton?.addEventListener("click", randomButtonHandler);
primeNumButton?.addEventListener("click", primeNumButtonHandler);
clearButton?.addEventListener("click", clearButtonHandler);