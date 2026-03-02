"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-3">
			<p className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
				{title}
			</p>
			{children}
		</section>
	);
}

export default function MaterialDemo() {
	return (
		<div className="space-y-10 bg-background px-10 py-10">
			<div>
				<h1 className="font-bold text-2xl text-foreground tracking-tight">
					Materials
				</h1>
				<p className="mt-1 text-muted-foreground text-sm">
					Design system elements
				</p>
			</div>

			{/* Typography */}
			<Section title="Typography">
				<div className="space-y-1">
					<h1 className="font-bold text-3xl text-foreground">Heading 1</h1>
					<h2 className="font-semibold text-2xl text-foreground">Heading 2</h2>
					<h3 className="font-semibold text-foreground text-xl">Heading 3</h3>
					<p className="text-base text-foreground">Body — regular text</p>
					<p className="text-muted-foreground text-sm">Small — muted text</p>
					<p className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
						Label caps
					</p>
				</div>
			</Section>

			{/* Colors */}
			<Section title="Colors">
				<div className="flex flex-wrap gap-2">
					<div className="flex flex-col items-center gap-1">
						<div className="h-10 w-20 rounded border border-border bg-background" />
						<span className="text-muted-foreground text-xs">background</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<div className="h-10 w-20 rounded border border-border bg-card" />
						<span className="text-muted-foreground text-xs">card</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<div className="h-10 w-20 rounded bg-primary" />
						<span className="text-muted-foreground text-xs">primary</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<div className="h-10 w-20 rounded border border-border bg-secondary" />
						<span className="text-muted-foreground text-xs">secondary</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<div className="h-10 w-20 rounded bg-muted" />
						<span className="text-muted-foreground text-xs">muted</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<div className="h-10 w-20 rounded bg-destructive" />
						<span className="text-muted-foreground text-xs">destructive</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<div className="h-10 w-20 rounded bg-border" />
						<span className="text-muted-foreground text-xs">border</span>
					</div>
				</div>
			</Section>

			{/* Buttons */}
			<Section title="Buttons">
				<div className="flex flex-wrap gap-3">
					<Button>Default</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="link">Link</Button>
					<Button disabled>Disabled</Button>
					<Button size="sm">Small</Button>
					<Button size="lg">Large</Button>
				</div>
			</Section>

			{/* Badges */}
			<Section title="Badges">
				<div className="flex flex-wrap gap-2">
					<Badge>Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="outline">Outline</Badge>
					<Badge variant="destructive">Destructive</Badge>
				</div>
			</Section>

			{/* Inputs */}
			<Section title="Inputs">
				<div className="flex flex-wrap items-end gap-4">
					<div className="space-y-1.5">
						<Label htmlFor="demo-input">Label</Label>
						<Input
							className="w-60"
							id="demo-input"
							placeholder="Placeholder text"
						/>
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="disabled-input">Disabled</Label>
						<Input
							className="w-60"
							disabled
							id="disabled-input"
							placeholder="Disabled"
						/>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox id="demo-check" />
						<Label htmlFor="demo-check">Checkbox</Label>
					</div>
				</div>
			</Section>

			{/* Card */}
			<Section title="Card">
				<Card className="w-80" size="sm">
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							Card content goes here. It sits on a white surface with a subtle
							border.
						</p>
					</CardContent>
				</Card>
			</Section>

			{/* Tabs */}
			<Section title="Tabs">
				<Tabs className="w-96" defaultValue="tab1">
					<TabsList>
						<TabsTrigger value="tab1">Overview</TabsTrigger>
						<TabsTrigger value="tab2">Details</TabsTrigger>
						<TabsTrigger value="tab3">History</TabsTrigger>
					</TabsList>
					<TabsContent value="tab1">
						<p className="pt-2 text-muted-foreground text-sm">
							Overview content.
						</p>
					</TabsContent>
					<TabsContent value="tab2">
						<p className="pt-2 text-muted-foreground text-sm">
							Details content.
						</p>
					</TabsContent>
					<TabsContent value="tab3">
						<p className="pt-2 text-muted-foreground text-sm">
							History content.
						</p>
					</TabsContent>
				</Tabs>
			</Section>

			{/* Progress */}
			<Section title="Progress">
				<div className="w-80 space-y-3">
					<Progress value={25} />
					<Progress value={50} />
					<Progress value={75} />
					<Progress value={100} />
				</div>
			</Section>

			{/* Skeleton */}
			<Section title="Skeleton">
				<div className="w-80 space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-3/4" />
					<Skeleton className="h-4 w-1/2" />
					<Skeleton className="mt-4 h-10 w-full" />
				</div>
			</Section>
		</div>
	);
}
