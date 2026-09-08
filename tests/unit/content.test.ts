import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";

describe("project content", () => {
  it("contains exactly four approved portfolio projects", () => {
    expect(projects).toHaveLength(4);
  });
  it("uses full GitHub URLs", () => {
    for (const project of projects) expect(project.githubUrl).toMatch(/^https:\/\/github\.com\/kimtour\//);
  });
});
