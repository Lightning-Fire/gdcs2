---
title: Pathfinding
weight: 9110
date: 2024-09-30T00:00:00.000Z
description: Pathfinding is one of the most practical types of computer algorithms. If you’re trying to go somewhere, your map app uses pathfinding to give you the fastest route. If you’re making a game, enemy AI often uses pathfinding to quickly approach the player while avoiding obstacles. This guide will explain how pathfinding algorithms work so you can implement them in your levels.
authors:
  - furorem
contributors:
  - furorem
  - komatic5
draft: false
math: true
seo:
  title: Graph Theory and Pathfinding for Geometry Dash
  description: Basics of graph theory and pathfinding algorithms for Geometry Dash
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- Pathfinding algorithms use graphs to represent paths between objects, connections between people, and so on.
- You can represent a graph using an adjacency list, or an adjacency matrix. Both of these have their pros and cons depending on the circumstances
- There are a variety of pathfinding algorithms, but the main ones you’ll use are Depth/Breadth-First Search, Dijkstra’s Algorithm, and A*. All of these are usable in GD, provided that you make a Queue/Stack data structure for them.

{{< /callout >}}

** **

# 1: Basics of Graph Theory

The vast majority of pathfinding algorithms use **graphs**. These are abstract objects made of two things; a set of **nodes**, and a set of **links/edges** which each link two nodes together.

You can think of a graph as drawing a bunch of points (nodes) on paper, and then drawing lines between some of them. This also means that a node can exist without being linked to other nodes, but a link must go from one node to another. Nodes that have an edge between them are called **neighbors**.
## Types of Graphs

**Oriented/Non-oriented**

A graph is **oriented** if the links are represented as __one-way arrows__. This means that with a link from node $n$ to node $m$, you can go from $n$ to $m$, but not the other way around, unless a link from $m$ to $n$ also exists. For example, you can go from 1 to 3 in the graph below, but not from 3 to 1.

{{< img src="https://lh3.googleusercontent.com/d/1uyQgeT7lkbH62cO6ExxOH_g769PD1Jl_" >}}

With a non-oriented graph, the edges are represented as two-way arrows, or just lines without arrows.

{{< img src="https://lh3.googleusercontent.com/d/1Zkk5T1d86qDnvfKDjNhBAXY5Tr-irpk0" >}}

**Weighted/Unweighted**

A graph is weighted if each link has an extra number related to it called the **weight** of the link. These can represent things like distance, cost, and even probability.

An unweighted graph has no numbers, so each edge has the same “weight”.

{{< img src="https://lh3.googleusercontent.com/d/1l1_Jy4DcC5l_pvp6Ee3mcvouV29c8MdQ" >}}

**Multigraphs**

A **multigraph** lets you have multiple links between two nodes, and nodes that are linked to themselves. These are less common, but still have their use cases nonetheless, mostly in scenarios with multiple valid paths between two objectives.

{{< img src="https://lh3.googleusercontent.com/d/1Ib-Q7IS8EWx6ms_M2RZeCV9iZBVXbjuu" >}}


**Connected Graphs**

We say a graph is connected if you can reach any node from any other node through a set of edges. Basically, if you can draw the whole graph without picking up your pencil, it’s connected.

For example, the graph on the left is connected, but the graph on the right is not.

{{< img src="https://lh3.googleusercontent.com/d/12PIuJArgyZRCrEgmQ-_Gui9hu2DkdzEm" >}}


## Uses for Graphs
Graphs are very important, as they're a very general tool used to represent a lot of things, but mostly network and relations based situations.
For example, you can use an oriented graph to represent a city, where intersections/points of interest are nodes, and roads are links, depending on if you can cross them or not, with the weight representing the length of the road.


{{< img src="https://lh3.googleusercontent.com/d/18sCCIU9Hd2_seN11J8NTqlb-cIpKHh3k" >}}


You can also use graphs to simplify a maze for AI to traverse, where a node would represent an intersection or dead end.

{{< img src="https://lh3.googleusercontent.com/d/1yZoqV5t1WDx8kJrl2CQ1h3UsyJV1qt__" >}}


Networks of interactions are also uses of graphs. For example, you could draw nodes to represent people in a school, and edges to represent which people are friends with each other. Additionally, you can consider flowcharts (such as the ones you use to make algorithms) as a sort of graph.

# 2: Making Graphs

Since you should know what a graph is in theory now, it’s time to look at how you can represent them in-game or in computer science.

## Adjacency Lists

These are the simplest way to think of and represent graphs; you just store a list of each node’s neighbors. This is very compact space-wise. especially for graphs with only a few edges. However, it also means each node requires arrays of different sizes, which isn’t the simplest task in GD.

Adjacency lists are really efficient for figuring out what neighbors a node has, since you can just loop through that node’s list. They also work on basically every type of graph as you can attach data to them easily. However, they’re very bad for determining if two nodes are connected as you’ll have to go through all the neighbors of either/both nodes.

Here are some examples.

{{< img src="https://lh3.googleusercontent.com/d/111DFZUJ0WID9bqdG0iJ7viKD-6EhGhL1" >}}

{{< img src="https://lh3.googleusercontent.com/d/1XGF_nHnhJzgxNKsqFd4nm-mmZtgFisNm" >}}

## Adjacency Matrices

An adjacency matrix is a matrix of size $n \times n$ (where $n$ is the number of nodes) with the element of (row $i$, column $j$) being the weight of the edge if one exists, or a special value otherwise (0, -1, greatest integer possible, pick whatever suits your needs). It can also be unweighted, and in that case, just a matrix of zeros and ones can do the trick. Adjacency Matrices cannot be used on multigraphs.

{{< img src="https://lh3.googleusercontent.com/d/1ACKPgPZXBPl9ndBys4tZRhBCgVxei58f" >}}

If the graph is undirected, you can just use a triangular matrix. Since there is no distinction between the node from and the node to in the link, it would be symmetric along the diagonal. You can remove either the bottom or top half, to avoid data duplication and extra memory.

{{< img src="https://lh3.googleusercontent.com/d/1TVCXvHisD4V-7bkdu46HcQ94DbWmUPK-" >}}

Note that information about links is useless on the diagonal. Since this info is related to a node and itself, and you can’t use these matrices on Multigraphs, you can add extra information in those spaces.

For example, here I am keeping track of how many neighbors a node $x$ has in the space $(x, x)$, which makes querying how many neighbors a node instantaneous, which isn’t normally the case in a normal adjacency matrix.

{{< img src="https://lh3.googleusercontent.com/d/1Re_2gjPKg3PWvPjZeCoIu3CSkC7iuEEw" >}}

There are other ways of representing graphs, but they are usually for very specific cases far from their uses in games.

# 3: Pathfinding Algorithms

In this part, we’ll discuss the essentials of many common pathfinding algorithms. This includes their purpose, what kinds of graphs they work on, the computation itself, and their complexity.

If you recall Function Design 1, complexity, noted $O(f(x))$, is an approximation of how long the algorithm will take depending on the size of the input. For example, with an algorithm of $O(n)$, algorithm(4) will take roughly twice as long as algorithm(2).

A few of these algorithms will use data structures presented in the Data Structures guide, so you should reread it for a refresher (when that's released).

We will also want to sometimes attach extra data to go with the node, like knowing its predecessor to reconstruct a path at the end, so you may need to adapt your data structure accordingly.

## Exploration algorithms (Whole graph)

**DFS (easy)**

Depth-first Search is an algorithm that traverses the whole graph from a certain node called the root by trying to go as far as it can until it meets a dead end, and then goes back to explore the rest.

It is useful in many applications, but for our purposes, random maze generation is the most obvious application.

DFS is a general purpose algorithm, meaning you’re free to attach any extra data you need, or terminate it early when you have the information you need.

```js
fn DFS(graph: Graph, root_node: Node) {
let discovered: Array<bool> = Array[graph.nb_nodes()] - Array of boolean (true/false) values
let stack: Stack = Stack::with_capacity(graph.nb_nodes())
stack.push(root_node) - Push the root node onto the stack.
while NOT stack.is_empty() {
  let next: Node = stack.pop() - The next node is popped from the stack.
  if not discovered[next.id()] { - “next” is not part of the “discovered” array.
  discovered[next.id()] = true - “next” is marked as a node we’ve traversed.
  for n in node.neighbours() {
  stack.push(n) - Add all of the node’s neighbors onto the stack, and repeat the while loop.
  }
  }
}
}
```

The time complexity of this algorithm is `O(graph.nb_nodes() + graph.nb_edges())`, though it depends on how you’ve implemented your stack.

A slightly modified version of DFS is used to generate random 2D mazes. A maze of size $x \times y$ can be represented using a graph with $x \times y$ nodes arranged in a grid. Links between nodes exist if you can go from one node to another.

Here’s the algorithm for how to create a random maze:

```js
let maze: Graph = Graph::grid(x, y)
let stack: Stack = Stack::with_capacity(x * y)
let discovered: Array<bool> = Array[graph.nb_nodes()]
stack.push(start_node)
while not stack.is_empty() {
  let node: Node = stack.pop(node)
  visited[node.id()] = true
  while all neighbors of node are visited {
  if stack.is_empty() {
  stop algorithm
}
  node = stack.pop()
  }
  let random_neighbor = choose_random_neighbor_of(node)
  stack.push(random_neighbor)
  remove_wall_between(node, random_neighbor)
}
```

The function `remove_wall_between` is done on the actual in-game maze, where you can use a system of toggle triggers to remove the respective walls. This gives us fully randomized mazes that are sure to have at least one solution from any point $A$ to any point $B$.

Here’s an example of that algorithm on a 3x3 maze, with the node in red being the current node, the blue one a randomly chosen neighbor, and nodes in green being ones you’ve already visited.

{{< img src="https://lh3.googleusercontent.com/d/1qMR7-dIq4UCyf8YbRHFZJcyZcYmG4gnu" >}}

Even with such a small grid, the algorithm already gives a maze-like structure with intersections and dead ends, while still being fully completable from one point to any other. And as you can see, a link between two nodes implies a wall on the final maze, instead of the other way around.

**BFS (easy)**

Breadth-first Search is a cousin of DFS, but it searches “horizontally” instead of “vertically”. Instead of starting at a root node and trying to go as far as it can from that node, then backtracking, it explores the neighbors of the root node, then the neighbors of those neighbors, and so on.

In practice, it can be implemented the same way as DFS, but replaces the stack with a queue. A queue is just an array of elements, but like a real life queue, the first elements added are the first ones removed.

```js
fn BFS(graph: Graph, root_node: Node) {
let discovered: Array<bool> = Array[graph.nb_nodes()] - Array of boolean (true/false) values
let queue: Queue = Queue::with_capacity(graph.nb_nodes())
stack.push(root_node) - Push the root node onto the queue.
while NOT queue.is_empty() {
  let next: Node = queue.pop() - The next node is popped from the queue.
  if not discovered[next.id()] { - “next” is not part of the “discovered” array.
  discovered[next.id()] = true - “next” is marked as a node we’ve traversed.
  for n in node.neighbours() {
  queue.push(n) - Add all of the node’s neighbors onto the queue, and repeat the while loop.
  }
  }
}
}
```

The time complexity of this algorithm is still `O(graph.nb_nodes() + graph.nb_edges())`, as we can potentially traverse the whole graph.

This algorithm is useful to find the minimum number of nodes you must traverse to go from one node to another. However, if you just want to know if the node’s reachable or not, DFS is usually a better option since queues can be slower than stacks in GD.

## Pathfinding algorithms (Pairs of nodes)

**Dijkstra (medium)**

Dijkstra’s algorithm is used to find the shortest path between two nodes. It works on any type of graph as long as there are no negative weights in it, and that a path actually exists between these two nodes. It works by sorting all possible paths by their total weight as it goes, to avoid computing paths that are not relevant to the current computation. This means it checks the neighbors of the current node, and as long as there's a path to the end node, it chooses the node with the lowest weight and repeats that process.

```js
// Here, we attach the cost to reach a node and its predecessor in the path with it
fn dijkstra(g: Graph, start: Node, end: Node) {
  let queue = PriorityQueue(comparator = cost)
  let visited = Array<bool> = Array::with_capacity(g.nb_nodes())
  let predecessors = Array<Node> = Array::with_capacity(g.nb_nodes())
  queue.push(start)
  while NOT queue.is_empty() {
  candidate = queue.pop()
  if candidate == end {
  // Reconstruct the path
  END
  }
  visited[candidate] = true
  predecessors[candidate] = candidate.predecessor
  for n in graph.neighbours_of(candidate) {
queue.push(n,
cost = candidate.cost +
graph.weight_of_link_between(n, candidate),
  predecessor = candidate)
  }
  }
}
```

The time complexity of the algorithm is `O((graph.nb_nodes() + graph.nb_links()) * log(graph.nb_links())`, though it may depend on your implementation of the queue.

**A\* (hard)**

A* is an algorithm that finds a “good enough” path between two nodes in a graph when we already know what the optimal path may look like. For example, if you’re making a game where the end goal is always in the top right, you can guess that going to the bottom left isn’t optimal at all.

A* does a similar thing. It progressively explores all nodes, but chooses the best candidate each time by using a heuristic to approximate how good a path will be. In the example above, our heuristic should give us good values for going right or up, and bad values for going left or down.

A* is widely used because it skips large parts of the graph you know will not be optimal anyways. That’s why it’s often used in AI pathfinding; the optimal way to reach a goal is usually by going in its general direction, and it’s not a huge deal if that path isn’t the absolute best.

```js
fn heuristic(n: Node, g: Graph) -> number {
  // Whatever you want here
}

fn A*(g: Graph, start: Node, end: Node) {
  let openQueue = PriorityQueue(comparator = heuristic)
  let visited = Array<bool> = Array::with_capacity(g.nb_nodes())
  let predecessors = Array<Node> = Array::with_capacity(g.nb_nodes())
  openList.add(start)
  while NOT openList.is_empty() {
  node `n` = openQueue.pop()
  if n == end {
  // the path has been found, you can reconstruct it from the predecessors array
  END
  }
  if visited[n] {
  continue - go on the next node
  }
  for n2 in graph.neighbours_of(n) {
  if NOT visited[n2] {
  openQueue.push(n2, predecessor = n);
  }
  }
  visited[n] = true
  predecessors[n] = n.predecessor //definitive predecessor
  }
  // no path exists
  END
}
```

The time complexity is `O(graph.nb_nodes())`, though this is the case where no path has been found. Usually, it will take far fewer steps to discover a path, depending on the structure of your graph.


# Sources

[Example images taken from these slides (French)](https://docs.google.com/presentation/d/1eaGNyOmGUu7jj1dTxL_lqAdgGQcTkyovo-qQouRYWrw/edit?slide=id.g2de964e2c24_3_5#slide=id.g2de964e2c24_3_5).

