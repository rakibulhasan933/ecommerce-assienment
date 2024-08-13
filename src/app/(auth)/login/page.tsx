import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-6">
                <div className="flex items-center justify-center">
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                        <MountainIcon className="h-8 w-8" />
                        <span className="font-bold text-2xl">Acme Store</span>
                    </Link>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-3xl font-bold">Login</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-primary underline underline-offset-4"
                                    prefetch={false}
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </CardContent>
                    <CardFooter className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="font-medium text-primary underline underline-offset-4" prefetch={false}>
                            Create Account
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}