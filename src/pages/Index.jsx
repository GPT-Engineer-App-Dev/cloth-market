import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Welcome to Our Clothing Store</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Product 1</CardTitle>
            <CardDescription>Stylish and comfortable</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Price: $49.99</p>
          </CardContent>
          <CardFooter>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Product 2</CardTitle>
            <CardDescription>Elegant and modern</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Price: $69.99</p>
          </CardContent>
          <CardFooter>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Product 3</CardTitle>
            <CardDescription>Casual and trendy</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Price: $39.99</p>
          </CardContent>
          <CardFooter>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
      </main>
      <Separator className="my-8" />
      <footer className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
        <div className="flex justify-center items-center space-x-4">
          <Label htmlFor="email">Email:</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;