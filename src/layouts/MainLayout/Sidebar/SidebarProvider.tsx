import { BreakpointsContext } from "@/contexts/breakpoints";
import { InfoContext } from "@/contexts/info";
import { SwipeableDrawerProps, useTheme } from "@mui/material";
import { ProviderProps, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarContext, { SidebarContextType, SidebarState } from "./SidebarContext";
import { SidebarTab } from "./SidebarItem";

type TemporarySidebarTab = Pick<SidebarTab, "title" | "to" | "icon"> & {
  children?: TemporarySidebarTab[];
};

const flatSidebarTabs: SidebarTab[] = [];

function convertTemporaryToSidebarTab(temporary: TemporarySidebarTab, index: number = 0, parentHashPath: string = "/"): SidebarTab {
  const hashPath = parentHashPath.endsWith("/") ? `${parentHashPath}${index}/` : `${parentHashPath}/${index}/`;

  const sidebarTab: SidebarTab = {
    ...temporary,
    children: temporary.children ? temporary.children.map((t, i) => convertTemporaryToSidebarTab(t, i + 1, hashPath)) : [],
    hashPath,
  };

  flatSidebarTabs.push(sidebarTab);

  return sidebarTab;
}

const temporarySidebarTabs: TemporarySidebarTab[][] = [
  [
    {
      title: "Articles",
      to: "/articles",
      icon: "A",
    },
    {
      title: "Tenses",
      icon: "T",
      children: [
        {
          title: "Simple Present",
          to: "/simple-present",
          icon: "S",
        },
        {
          title: "Simple Past",
          to: "/simple-past",
          icon: "S",
        },
        {
          title: "Simple Future",
          to: "/simple-future",
          icon: "S",
        },
        {
          title: "Present Continuous",
          to: "/present-continuous",
          icon: "P",
        },
        {
          title: "Past Continuous",
          to: "/past-continuous",
          icon: "P",
        },
        {
          title: "Future Continuous",
          to: "/future-continuous",
          icon: "F",
        },
        {
          title: "Present Perfect",
          to: "/present-perfect",
          icon: "P",
        },
        {
          title: "Past Perfect",
          to: "/past-perfect",
          icon: "P",
        },
        {
          title: "Future Perfect",
          to: "/future-perfect",
          icon: "F",
        },
        {
          title: "Present Perfect Continuous",
          to: "/present-perfect-continuous",
          icon: "P",
        },
      ],
    },
    {
      title: "Passive Voice",
      to: "/passive-voice",
      icon: "P",
    },
    {
      title: "Reported Speech",
      to: "/reported-speech",
      icon: "R",
    },
    {
      title: "Relative Clauses",
      to: "/relative-clauses",
      icon: "R",
    },
    {
      title: "Conditional Sentences",
      to: "/conditional-sentences",
      icon: "C",
    },
    {
      title: "Because Although Clauses",
      to: "/because-although",
      icon: "B",
    },
    {
      title: "Comparison",
      to: "/comparison",
      icon: "C",
    },
    {
      title: "Use Used To Be Used To",
      to: "/used-to",
      icon: "U",
    },
    {
      title: "Making Questions",
      to: "/making-questions",
      icon: "M",
    },
    {
      title: "Purpose Clauses",
      to: "/purpose",
      icon: "P",
    },
    {
      title: "Result Clause",
      to: "/result-clause",
      icon: "R",
    },
    {
      title: "Modal Verbs",
      to: "/modal-verbs",
      icon: "M",
    },
    {
      title: "Adverbial Clauses of Time",
      to: "/adv-clauses-of-time",
      icon: "A",
    },
    {
      title: "Subjunctive Mood",
      to: "/subjunctive-mood",
      icon: "S",
    },
    {
      title: "It Not Until",
      to: "/it-not-until",
      icon: "I",
    },
    {
      title: "Verb Forms",
      to: "/verb-forms",
      icon: "V",
    },
    {
      title: "The + Adj",
      to: "/the-adj",
      icon: "T",
    },
    {
      title: "Which as a Connector",
      to: "/which-connector",
      icon: "W",
    },
    {
      title: "Transformation",
      to: "/transformation",
      icon: "T",
    },
    {
      title: "Pronunciation",
      to: "/pronunciation",
      icon: "P",
    },
    {
      title: "Agreement Responses",
      to: "/agreement-responses",
      icon: "A",
    },
    {
      title: "Wish Clauses",
      to: "/wish-clauses",
      icon: "W",
    },
    {
      title: "Other Formulas",
      to: "/other-formulas",
      icon: "O",
    },
  ],
];

const sidebarTabs: SidebarTab[][] = temporarySidebarTabs.map((tempArr, Arrindex) => tempArr.map((value, index) => convertTemporaryToSidebarTab(value, index, Arrindex.toString())));

type SidebarProviderProps = Omit<ProviderProps<SidebarContextType>, "value">;

function SidebarProvider(props: SidebarProviderProps) {
  const theme = useTheme();
  const location = useLocation();
  const [sidebarWidth] = useState<number>(theme.constants.sidebarWidth);
  const { lgAndUp } = useContext(BreakpointsContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const [miniSidebarWidth] = useState<number>(theme.constants.miniSidebarWidth);
  const [sidebarVariant, setSidebarVariant] = useState<SwipeableDrawerProps["variant"]>();
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const { mobile } = useContext(InfoContext);
  const displayAsDesktop = lgAndUp && !mobile;
  const sidebarState: SidebarState = displayAsDesktop
    ? sidebarPinned
      ? "permanent"
      : sidebarHovered ? "miniHovered" : "mini"
    : sidebarOpen ? "temporary" : "hidden";
  const sidebarCurrentWidth: number = displayAsDesktop
    ? (sidebarPinned ? sidebarWidth : miniSidebarWidth)
    : 0;
  document.body.style.setProperty("--sidebar-current-width", `${sidebarCurrentWidth}px`);
  const [currentSidebarTab, setCurrentSidebarTab] = useState<SidebarTab | undefined | null>(undefined);

  const setSidebarOpenWrapper = (value: boolean) => {
    // can not close sidebar on lgAndUp breakpoint
    if (!displayAsDesktop) {
      setSidebarOpen(value);
    }
  };

  useEffect(() => {
    // sidebar always show on lgAndUp breakpoint
    setSidebarOpen(displayAsDesktop);

    const variant: SwipeableDrawerProps["variant"] = displayAsDesktop ? "permanent" : "temporary";
    setSidebarVariant(variant);
  }, [displayAsDesktop]);

  useEffect(() => {
    const sidebarTab = flatSidebarTabs.find((sidebarTab) => sidebarTab.to === location.pathname);
    setCurrentSidebarTab(sidebarTab);
  }, [location]);

  const miniSidebarTransition = (...props: string[]) => theme.transitions.create(props, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    delay: theme.transitions.duration.shorter,
  });
  const permanentSidebarTransition = (...props: string[]) => theme.transitions.create(props, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    delay: theme.transitions.duration.shorter,
  });

  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen: setSidebarOpenWrapper,
        sidebarCurrentWidth,
        sidebarPinned,
        setSidebarPinned,
        sidebarState,
        sidebarVariant,
        miniSidebarTransition,
        permanentSidebarTransition,
        sidebarHovered,
        setSidebarHovered,
        sidebarTabs,
        currentSidebarTab,
      }}
      {...props}
    />
  );
}

export default SidebarProvider;
