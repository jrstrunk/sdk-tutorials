---
title: Exercise - Create an object
order:
description: Exercise - From simple creation to practice
tag: deep-dive
---

# Exercise - Create an object

You are about to perform a small, simple exercise on Hackerrank, to confirm your attendance so far and check you're paying attention! <!-- Before you [try](TODO), here is a summary of what you will be asked to do. -->

# The problem description

The following repository was created with Ignite CLI v0.17.3 and the command:

```sh
$ ignite scaffold chain
```

**The idea is that this blockchain will back a future metaverse**. The blockchain will account for anything of value in it.

## Hidden files

There are hidden files that:

1. Declare and implement a `WorldParams2` type.
2. Test this type against a future type which **you** have to create.

## Student actions

Your goal is to run an Ignite command to create a new Protobuf type that follows this description:

1. Its name is `WorldParams`.
2. It has exactly 3 parameters, in exactly this order, with the Protobuf indices going from `1` to `3` respectively:
   1. A `string` for the world's `name`.
   2. A `uint` for the world's `gravity`.
   3. A `uint` for the world's `landSupply`.
3. It is unique in the blockchain store. At what key it is stored does not matter, but you should keep the naming conventions of keeper functions chosen by Ignite.
4. It should not have any associated messages.

## How your work is tested

A hidden test file will check that your output is properly named and prepared. Based on that:

* If you have a compilation error, it means you have named elements wrongly.
* If the test fails, you have numbered things wrongly in Protobuf, or you have messages for `WorldParams`.

## How you can prepare

To assist you getting a feel of what it looks like behind the Hackerrank wall, we have put this small [public repository](https://github.com/b9lab/ida-exercise-week-2-student-repo) that contains what you will see minus the hidden files.

It will fail to compile because it is missing `WorldParams2`, a hidden file. Of course, this `WorldParams2` is strictly identical to the `WorldParams` we ask you to create. So you can practice:

* Either by removing the files that do not compile.
* Or by creating this `WorldParams2` as a copy of your `WorldParams`.

## When you are ready

The link to submit your exercise via HackerRank will be available here next week.
<!-- When you are ready to take the test go [here](TODO). -->

**Please make sure to submit your exercise till Monday 30th 23:59 UTC.**