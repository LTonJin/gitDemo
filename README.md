### git 操作
查看分支 ``git branch`` (显示所有分支)

创建分支 ``git branch 分支名称``

切换分支 ``git checkout 分支名称``

创建并切换分支 ``git checkout -b 分支名称`` (上面两个命令合并)

合并分支 ``git merge 分支名称`` (将分支合并到当前分支)

删除分支 ``git branch -d 分支名称``

```
八：多人协作。 当你从远程库克隆时候，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且远程库的默认名称是origin。
要查看远程库的信息 使用 git remote要查看远程库的详细信息 使用 git remote –v如下演示

一：推送分支：

推送分支就是把该分支上所有本地提交到远程库中，推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上： 使用命令 git push origin master
可以看到 推送成功了，如果我们现在要推送到其他分支，比如dev分支上，我们还是那个命令 git push origin dev
master分支是主分支，因此要时刻与远程同步。一些修复bug分支不需要推送到远程去，可以先合并到主分支上，然后把主分支master推送到远程去

二：抓取分支：

多人协作时，大家都会往master分支上推送各自的修改。现在我们可以模拟另外一个同事，可以在另一台电脑上（注意要把SSH key添加到github上）或者同一台电脑上另外一个目录克隆，新建一个目录名字叫testgit2
现在我们的小伙伴要在dev分支上做开发，就必须把远程的origin的dev分支到本地来，于是可以使用命令创建本地dev分支：git checkout –b dev origin/dev
现在小伙伴们就可以在dev分支上做开发了，开发完成后把dev分支推送到远程库时。
git push origin dev
小伙伴们已经向origin/dev分支上推送了提交，而我在我的目录文件下也对同样的文件同个地方作了修改，也试图推送到远程库时，如下： 
由上面可知：推送失败，因为我的小伙伴最新提交的和我试图推送的有冲突，解决的办法也很简单，上面已经提示我们，先用git pull把最新的提交从origin/dev抓下来，然后在本地合并，解决冲突，再推送。
git pull也失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接：如下：
git branch --set-upstream-to=origin/dev dev

首先，可以试图用git push origin branch-name推送自己的修改.如果推送失败，则因为远程分支比你的本地更新早，需要先用git pull试图合并。如果合并有冲突，则需要解决冲突，并在本地提交。再用git push origin branch-name推送。
```
git stash命令介绍