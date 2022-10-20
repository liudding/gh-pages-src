---
title: 如何撤销 Git 合并 git merge
date: 2022-10-20
author: ding
location: Shanghai
---


### 使用 git reset

此方法只能撤销本地 git merge。

Git 非常方便的是几乎可以撤消任何操作，包括合并 merge。可以使用 `git reset` 命令重置到合并之前的版本，从而实现撤消：

```
git reset --hard <commit-before-merge>
```

如果在合并之前没有提交的 hash，还可以使用以下命令变体：

```
git reset --hard HEAD~1
```

这样，使用“HEAD~1”，让 Git 回到当前 HEAD 之前的提交，通常都是合并之前的一次提交。

需要注意的是，在这两种情况下，都需要使用 `--hard` 选项。这将丢弃工作副本中的任何本地修改。如果你还有未提交的修改，一定一定要先 `git stash`。


### 如何撤销已推送的 merge

当未将合并推送到远程仓库时，可以使用上面的方式实现撤销。而如果推送了，那就需要使用下面的方式。

```
git revert -m 1 <merge-commit-hash>
```

* `git revert` 将创建一个新的提交，并抵消掉被合并的提交，不会改变过去的历史。可以安全地取消之前发布的提交.
* `-m 1` 我们要保留的父端，也即被合并到的分支。
* 确保提供正确的提交 hash：我们必须指定实际的合并提交的 hash。


> [revert-a-faulty-merge How-To](https://github.com/git/git/blob/master/Documentation/howto/revert-a-faulty-merge.txt)