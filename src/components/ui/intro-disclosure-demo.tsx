"use client"

import { useEffect, useState } from "react"
import { ChevronDownIcon, ResetIcon } from "@radix-ui/react-icons"
import { DatabaseIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible"

import { IntroDisclosure } from "./intro-disclosure"

const steps = [
  {
    title: "Welcome to SkilliZee",
    short_description: "Discover our modern learning platform",
    full_description:
      "Welcome to SkilliZee! Let's explore how our beautifully crafted learning platform can help you build amazing skills with ease.",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      alt: "SkilliZee platform overview",
    },
  },
  {
    title: "Interactive Learning",
    short_description: "Engage with hands-on projects",
    full_description:
      "Every course is built with interactivity in mind. Use our powerful project-based learning system to master new skills through practical application.",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      alt: "Interactive learning interface",
    },
    action: {
      label: "Explore Courses",
      href: "/courses",
    },
  },
  {
    title: "Expert Mentorship",
    short_description: "Learn from industry professionals",
    full_description:
      "All courses are designed and taught by industry experts, ensuring you learn the most relevant and up-to-date skills for your career.",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      alt: "Expert mentorship demonstration",
    },
  },
  {
    title: "Start Learning",
    short_description: "Begin your journey today",
    full_description:
      "You're ready to start learning! Check out our comprehensive course catalog and start building the skills that will advance your career.",
    action: {
      label: "Get Started",
      href: "/signup",
    },
  },
]

type StorageState = {
  desktop: string | null
  mobile: string | null
}

export function IntroDisclosureDemo() {
  const [open, setOpen] = useState(true)
  const [openMobile, setOpenMobile] = useState(true)
  const [debugOpen, setDebugOpen] = useState(false)
  const [storageState, setStorageState] = useState<StorageState>({
    desktop: null,
    mobile: null,
  })

  const updateStorageState = () => {
    setStorageState({
      desktop: localStorage.getItem("feature_intro-demo"),
      mobile: localStorage.getItem("feature_intro-demo-mobile"),
    })
  }

  // Update storage state whenever localStorage changes
  useEffect(() => {
    updateStorageState()
    window.addEventListener("storage", updateStorageState)
    return () => window.removeEventListener("storage", updateStorageState)
  }, [])

  // Update storage state after reset
  const handleReset = () => {
    setOpen(true)
    if (storageState.desktop === "false") {
      console.log("Clear the local storage to trigger the feature again")
      setDebugOpen(true)
    }
    if (storageState.desktop === null) {
      updateStorageState()
    }
  }

  const handleResetMobile = () => {
    setOpenMobile(true)
    updateStorageState()
  }

  const handleClearDesktop = () => {
    localStorage.removeItem("feature_intro-demo")
    updateStorageState()
    console.log("Desktop storage cleared")
  }

  const handleClearMobile = () => {
    localStorage.removeItem("feature_intro-demo-mobile")
    updateStorageState()
    console.log("Mobile storage cleared")
  }

  const handleDebugOpenChange = (open: boolean) => {
    if (open) {
      updateStorageState()
    }
    setDebugOpen(open)
  }

  return (
    <div className="w-full space-y-8">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h2 className="text-2xl font-semibold leading-none tracking-tight mb-4">
            IntroDisclosure Demo
          </h2>
          <p className="text-muted-foreground mb-6">
            Experience our feature introduction component in both desktop and
            mobile variants. Click the reset buttons to restart the demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-0">
          <div className="flex flex-col">
            <div
              className={cn(
                "flex flex-col gap-6 rounded-lg border-2 p-6 transition-colors",
                !open && "border-muted bg-muted/50",
                open && "border-primary"
              )}
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex   flex-col">
                  <p className="text-sm text-muted-foreground text-left">
                    (Disclosure)
                  </p>
                  <h3 className="text-xl font-semibold">Desktop View</h3>
                </div>
                <button
                  onClick={handleReset}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    open 
                      ? "bg-white text-gray-900 hover:bg-gray-100" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <ResetIcon className="mr-2 h-4 w-4" />
                  Start Demo
                </button>
              </div>
              <IntroDisclosure
                open={open}
                setOpen={setOpen}
                steps={steps}
                featureId="intro-demo"
                showProgressBar={false}
                onComplete={() => console.log("Tour completed")}
                onSkip={() => console.log("Tour skipped")}
              />
              <div className="text-sm text-muted-foreground">
                Status: {open ? "Active" : "Completed/Skipped"}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className={cn(
                "flex flex-col gap-6 rounded-lg border-2 p-6 transition-colors",
                !openMobile && "border-muted bg-muted/50",
                openMobile && "border-primary"
              )}
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex  flex-col">
                  <p className="text-sm text-muted-foreground">
                    (Drawer + Swipe)
                  </p>
                  <h3 className="text-xl font-semibold">Mobile View</h3>
                </div>
                <button
                  onClick={handleResetMobile}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    openMobile 
                      ? "bg-white text-gray-900 hover:bg-gray-100" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <ResetIcon className="mr-2 h-4 w-4" />
                  Start Demo
                </button>
              </div>
              <IntroDisclosure
                open={openMobile}
                setOpen={setOpenMobile}
                steps={steps}
                featureId="intro-demo-mobile"
                onComplete={() => console.log("Mobile tour completed")}
                onSkip={() => console.log("Mobile tour skipped")}
                forceVariant="mobile"
              />
              <div className="text-sm text-muted-foreground">
                Status: {openMobile ? "Active" : "Completed/Skipped"}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4">
          <Collapsible
            open={debugOpen}
            onOpenChange={handleDebugOpenChange}
            className="w-full"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg p-2  text-sm hover:bg-muted/50">
              <div className="flex flex-col items-start text-left">
                <h4 className="flex items-center gap-2 text-sm font-semibold">
                  <DatabaseIcon className="size-4" />{" "}
                  <span className="text-muted-foreground">
                    Browser Local Storage State
                  </span>
                </h4>
                <p className="text-sm text-muted-foreground mb-4 max-w-xl">
                  These values represent the "Don't show again" checkbox state.
                  <br />- When set to{" "}
                  <code className="bg-background px-1">true</code>, the intro
                  will be hidden. <br /> - When{" "}
                  <code className="bg-background px-1">null</code>, the intro
                  will be shown.
                </p>
              </div>
              <ChevronDownIcon
                className={cn(
                  "size-8 transition-transform duration-200",
                  debugOpen && "rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md bg-muted p-4 text-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-muted-foreground">
                        Desktop State:{" "}
                      </span>
                      <code className="rounded bg-background px-2 py-1">
                        {storageState.desktop === null
                          ? "null"
                          : storageState.desktop}
                      </code>
                    </div>
                    <Button size="sm" onClick={handleClearDesktop}>
                      Reset Local Storage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-muted-foreground">
                        Mobile State:{" "}
                      </span>
                      <code className="rounded bg-background px-2 py-1">
                        {storageState.mobile === null
                          ? "null"
                          : storageState.mobile}
                      </code>
                    </div>
                    <Button size="sm" onClick={handleClearMobile}>
                      Reset Local Storage
                    </Button>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
} 