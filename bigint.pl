#!/usr/bin/perl
use strict;
use warnings;
use bigint;

my $hugenum = 2 ** 1000;

if ($hugenum) {
    print $hugenum;
}
