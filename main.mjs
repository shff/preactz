import { h, Component, render } from "preact";
import { useState, useReducer, useEffect, useLayoutEffect, useRef, useMemo, useCallback, useContext } from "preact/hooks";
import domz from "domz";

Object.setPrototypeOf(h, domz(h));

export { h, Component, render, useState, useReducer, useEffect, useLayoutEffect, useRef, useMemo, useCallback, useContext };
