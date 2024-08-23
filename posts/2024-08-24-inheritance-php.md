---
name: "Understanding Inheritance in PHP"
date: "2024-08-24"
tags: ['php']
description: Learn the basics of inheritance in PHP, how it promotes code reuse, enhances maintainability, and improves code organization.
thumbnail: /img/norway/kamil-klyta-PB7NyRV8_L4-unsplash.jpg
---
Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class to inherit properties and methods from another class. In PHP, a popular server-side scripting language, inheritance plays a critical role in designing modular, reusable, and maintainable code. This article will provide a comprehensive guide to understanding how inheritance works in PHP, its benefits, and practical examples to illustrate its use.

## What is Inheritance?

Inheritance is a mechanism that allows a class (referred to as a child or subclass) to inherit properties and methods from another class (referred to as a parent or superclass). This allows developers to create a hierarchical relationship between classes, promoting code reuse and reducing redundancy.

By using inheritance, a child class can access and use the public and protected properties and methods of its parent class. Additionally, the child class can have its own properties and methods, providing the flexibility to extend or modify the behavior of the parent class.

## Basic Syntax of Inheritance in PHP

In PHP, inheritance is implemented using the `extends` keyword. Here is the basic syntax:

```php
class ParentClass {
  // Parent class code here
}

class ChildClass extends ParentClass {
  // Child class code here
}
```

The `ChildClass` will inherit all non-private properties and methods from the `ParentClass`. The `extends` keyword is used to establish this relationship.

## Example of Basic Inheritance

Let's look at a simple example to understand the basics of inheritance in PHP:

```php
class Animal {
  public $name;
  public $age;
  
  public function eat() {
    echo $this->name . " is eating.\n";
  }
  
  public function sleep() {
    echo $this->name . " is sleeping.\n";
  }
}
  
class Dog extends Animal {
  public function bark() {
    echo $this->name . " is barking.\n";
  }
}

// Creating an object of the Dog class
$dog = new Dog();
$dog->name = "Buddy";
$dog->age = 3;

$dog->eat();   // Output: Buddy is eating.
$dog->sleep(); // Output: Buddy is sleeping.
$dog->bark();  // Output: Buddy is barking.
```

In this example:

- The `Dog` class is a child class that extends the `Animal` class.
- The `Dog` class inherits the `name` and `age` properties and the `eat()` and `sleep()` methods from the `Animal` class.
- The `Dog` class also has its own method, `bark()`, which is specific to the `Dog` class.

## Types of Inheritance in PHP

PHP supports single inheritance, where a child class can inherit from only one parent class. However, it also supports multilevel inheritance, where a class can inherit from a class that is already a derived class of another class.

### Single Inheritance

Single inheritance is when a class inherits from a single parent class. PHP does not support multiple inheritance directly, meaning a child class cannot inherit from more than one parent class.

#### Example of Single Inheritance

```php
class Vehicle {
  public function move() {
    echo "The vehicle is moving.\n";
  }
}

class Car extends Vehicle {
  public function honk() {
    echo "The car is honking.\n";
  }
}

// Creating an object of the Car class
$car = new Car();
$car->move();  // Output: The vehicle is moving.
$car->honk();  // Output: The car is honking.
```

In this example, the `Car` class inherits from the `Vehicle` class, allowing it to use the `move()` method.

### Multilevel Inheritance

Multilevel inheritance is when a class is derived from a class which is also derived from another class. PHP supports multilevel inheritance.

#### Example of Multilevel Inheritance

```php
class LivingBeing {
  public function breathe() {
    echo "Breathing...\n";
  }
}

class Human extends LivingBeing {
  public function speak() {
    echo "Speaking...\n";
  }
}

class Programmer extends Human {
  public function code() {
    echo "Coding...\n";
  }
}

// Creating an object of the Programmer class
$programmer = new Programmer();
$programmer->breathe(); // Output: Breathing...
$programmer->speak();   // Output: Speaking...
$programmer->code();    // Output: Coding...
```

In this example:

- The `Programmer` class inherits from the `Human` class, which in turn inherits from the `LivingBeing` class.
- This forms a chain of inheritance, demonstrating multilevel inheritance.

## Method Overriding in Inheritance

Method overriding allows a child class to provide a specific implementation of a method that is already defined in its parent class. The overridden method in the child class must have the same name and parameters as the method in the parent class.

#### Example of Method Overriding

```php
class Animal {
  public function sound() {
    echo "Some generic animal sound\n";
  }
}

class Dog extends Animal {
  public function sound() {
    echo "Bark\n";
  }
}

// Creating objects
$animal = new Animal();
$animal->sound(); // Output: Some generic animal sound

$dog = new Dog();
$dog->sound(); // Output: Bark
```

In this example, the `Dog` class overrides the `sound()` method of the `Animal` class to provide a specific implementation.

## Using the `parent` Keyword

When a method is overridden in a child class, the `parent` keyword can be used to call the overridden method in the parent class. This is useful when you want to extend the functionality of the parent class method rather than replace it entirely.

#### Example of Using `parent`

```php
class Animal {
  public function sound() {
    echo "Some generic animal sound\n";
  }
}

class Dog extends Animal {
  public function sound() {
    parent::sound(); // Calling the parent class method
    echo "Bark\n";
  }
}

// Creating an object of the Dog class
$dog = new Dog();
$dog->sound();
// Output:
// Some generic animal sound
// Bark
```

In this example, the `Dog` class's `sound()` method calls the `sound()` method of the `Animal` class using `parent::sound()` before adding its behavior.

## Visibility and Inheritance

Visibility (or access modifiers) in PHP defines the accessibility of class properties and methods. PHP provides three visibility levels:

- **Public**: The member is accessible from anywhere.
- **Protected**: The member is accessible within the class itself and by inheriting and parent classes.
- **Private**: The member is only accessible within the class itself.

When a child class inherits from a parent class, it can access all the public and protected members of the parent class but not the private members.

#### Example of Visibility in Inheritance

```php
class ParentClass {
  public $publicVar = "I am public";
  protected $protectedVar = "I am protected";
  private $privateVar = "I am private";
  
  public function displayVars() {
    echo $this->publicVar . "\n";
    echo $this->protectedVar . "\n";
    echo $this->privateVar . "\n";
  }
}

class ChildClass extends ParentClass {
  public function showProtected() {
    echo $this->protectedVar . "\n"; // Can access protected property
  }
  
  public function showPrivate() {
    // echo $this->privateVar; // Uncaught Error: Cannot access private property
  }
}

// Creating an object of ChildClass
$child = new ChildClass();
$child->displayVars();  // Outputs all three variables
$child->showProtected(); // Output: I am protected
```

In this example, the `ChildClass` can access the `protected` variable of the `ParentClass` but not the `private` variable.

## The `final` Keyword

In PHP, the `final` keyword is used to prevent a class from being extended or to prevent a method from being overridden.

- **Final Class**: A class declared as `final` cannot be inherited.
- **Final Method**: A method declared as `final` cannot be overridden by a child class.

#### Example of `final` Keyword Usage

```php
final class BaseClass {
  public function printMessage() {
    echo "This is a final class method.\n";
  }
}

// Uncommenting the following line will cause an error
// class SubClass extends BaseClass {}

class ParentClass {
  final public function finalMethod() {
    echo "This method cannot be overridden.\n";
  }
}

class ChildClass extends ParentClass {
  // Uncommenting the following method will cause an error
  // public function finalMethod() {
  //     echo "Trying to override final method.\n";
  // }
}

// Creating objects
$parent = new ParentClass();
$parent->finalMethod(); // Output: This method cannot be overridden.
```

In this example:

- The `BaseClass` is declared as `final`, so it cannot be extended by any other class.
- The `finalMethod()` in the `ParentClass` is declared as `final`, so it cannot be overridden in the `ChildClass`.

## Conclusion

Inheritance is a powerful feature in PHP that allows for code reuse, better organization, and modularity in software development. By understanding how inheritance works in PHP, developers can design more efficient and maintainable code. It is essential to understand the different types of inheritance, method overriding, and the impact of visibility on inheritance to use this feature effectively. With practice, the use of inheritance can significantly improve the quality and readability of your PHP code.
