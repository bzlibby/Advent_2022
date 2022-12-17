const abcPriority = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function findDuplicateItem(rucksack) {
    const itemLength = ((rucksack.length) / 2);
    const compartment1 = rucksack.split('').slice(0, itemLength);
    const compartment2 = rucksack.split('').slice(itemLength);
    console.log(itemLength, compartment1, compartment2)
    const duplicate = compartment1.filter((letter) => compartment2.includes(letter));
    return duplicate;
}

function findItemPriority(items) {
    const duplicateItem = findDuplicateItem(items)[0];
    console.log(duplicateItem)
    return (abcPriority.findIndex((letter) => letter === duplicateItem)+1);
}

/* function rucksackPriority(itemPriority) {
    const allPriorities = findItemPriority(itemPriority)
} */

const testInput = (`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`).split('\n');
console.log(testInput);
console.log(findDuplicateItem(testInput[0]));
console.log(findItemPriority(testInput));


/* const puzzleInput = `VdzVHmNpdVmBBCpmQLTNfTtMhMJnhFhTTf
FgqsZbqDDFqRrhhJnsnLMTfhJG
bRRRPrRRwSwbDqgjvDZbRbQzpzmQVWCzzBdvQBFCzlWV
GcDdRdvhRssRhGDdShCRtqWjlQzqWgqzNfNjfQWWjt
mwwnnPFwmVrPmJmzfNzqCjQCbgVlgC
nPnHHLrHwmJTrCTJpThBscBSdSLGZvZBvRhZ
RVQQcVlcSRclfZCCCnMJJTSTnC
NdHwjdwjbBBZrrZrbJDZJJ
wmhjGGBGwwmjtjtdPlfRcpVQlhRppVJF
pplbNBPPrppllrFNbpvppSTcwqcWFhTTShhJDTchqd
RGzRfLjjmZmfmwLftTWhStStJWTdWmDm
nfsMjQssnpPvNnrPrw
SjjBgllzlQjBZvlBBgcFbgJHsMhJqbMHPggJbM
hRLRVDdRRWnJqnnHTqMCnH
GRfLddRRpVhNVrWSjwQQzSzcGSBQSc
qMwNqqBdQdnTVBBVVhMVnVFzTHPggTPjGRDzvPTjjmvPDj
sbSrWJpStrtPtRPttzmmDD
pfbJJcbsrcLpWLllsnFmcqcwQncnQQqVNQ
RBTWCMwCwdZThPZcZZ
pVmVpHLFFFHHVgVmvNmHSQNvddlPPzZJMPcdhclhjczLdZMP
vnnNnFStGMRDwWnn
fWDdJTpDJzdBBBdmDSbSRHRwPqbPbHgSbz
slQtQvNsMVvrrgPRgRglnhwWPH
sGMMQFrsjvNMfWmdpfFDFZBf
vnMRMWCMJwWWwwWPjmSdVmLdzvVbLrhL
HsNfDHQlZpNqfQzbLbrqhjLmVdjd
dfDZQsNpstHHHptZDDtZWgngtgBMPMMRwCPtBBGW
HwQwwbwFNWHwHBVFQFLQzRznZnSzcjjjpPbcPpSP
vTfTJsCmsftJZmTSSdPvzdjRSvPdjd
TrGtTJfmGDfDhrhJJJsqrZhDBFLHHLLQWFwwlWBVBBVwgLFD
FFTJRLccQgmTbSsbGm
PBPPqCvCwqwhQQVhQngmVmSgglmGnHbnmb
zqthvtQPBfCCzPwQPtwQzPwNLfNRFNLdLRLFRFFNLFdFdW
nszjQnsPwjznzCCrhJqvjqhmBv
tFWdHGWFGtctlNNpZBBhmqTrrbWqvTBT
dlFtcpHDVVVHFdNGHGpGfQgsPDzSMsQwwPwgLLBQ
TzQqTJGvnnSzqrWTnvfbbcflQcVltfcCMPVM
jFjNZFFJLpFwmBwblcpptcVtfbbVlR
jmmJdBBLNdGDWDDrdzqn
pzddqQmGgbqgGpbJmmdnLZDCRZnZvFlLRZLSlLRT
rVwchcBBMwVBHhHTZCTSGSCRTZlTDr
HtccPfjfBhMtVBGHWpNqJdJdpjNJppWz
WThTWWhtPbZRvvWbbvRTSRMjVRLLgFssgLpVsfSF
JdwrlJcCwfzdqwwjsjzpLMgVsMFgML
lQrwHNGJHClvTmfhBmPQmt
lbRLhcLRpLJzgdGddF
qvhwqDDCVtBDVhfMVGFnzGGzTBnGzGGgFg
VjCwCWCMtjVDtChvQhtffcSmHpNWrrcHZHHZpplWbp
DJVDVdvpmZdPgrCbgbgCJC
lzczcWwwznGhBgPSvTlCrNgqNC
wGzzQhzGGsBBGRBcQwGwnwjmmRHpRfmmMpppMjjHDvLL
HJjJQWjFmmWtFmJTMchghhDwNMhVMWML
SznPSRfRSSPdrrPSShbDVhbLPwcwGGwVNh
ddRfzdRrCrRsZDSnFjspvFvqFqFqTvJt
lflfjQfjvljfbfMLTTDCmHNLNVbL
HSJnRrrJZJssnGRrnsrcqqRnDCLBMhVCTLVLhVNVJBBBhhBm
SsrGGqqnSsWSnnqWHSrPfzftvFdvWlwfQgQwWvzz
nQlsGnFGwwqNJWmJJjpplt
HMTLPTRdvsTCCThDCZdLdLDNNpJBWJbjJMpBmbtNptBWmm
DLCzPzTzZDdLdGSGfSGrsnQGzr
LNPPLHNPHQNQSBFDWDPgggFv
hszfWCWJhrBMsSSBgvFD
GGZjfmJTjmZfrJrZrZJRGwNQnlLNHWjLVjlwdVNHpV
BdNVdTcGVclmTwrTnwPwrHCr
zttBWzfLsCggHPwDrf
szsWSMbWzzbqBbzJjtjsvMzzvdmdVpGllpcRNZZhmRpZcGGc
CjdbMmmmZFnzzgHlttGBVqtBGtsldG
LvPPWNcFSSRslWhBsllT
ppccvLPpcSNwLLwrDNNpLvwJHCMDmbCJbFzgmZZmFgbgnM
TTNRwZqhcTTjsNTTsmrJlvrmmmqqHSrlJH
fLQCCdtcfCDDVbVVQdFbQbdJHMHrJHrHnMllHdMHPrMdln
WfQLQWWDbwRTWcRssN
HQGQWHPDHNjMNQGNWNTWCvZllzqFZqzvvzhCtvFj
DfgwdgfcFpchztvt
sRggdwwVdgmnSTnnDBPBNWLn
WbCZCfTVTTJjSwGdWNDGGw
MMRqggMsqhlmlhrssHgRnRmRvdzdczvdNGNLzScGDrNzrLNc
lRqsnRhmqqQnQpgQMlgDqRfBTJVFbJZQtBCbZQJVZFFb
JnhQcCnmLDsmgmgr
bbMZppRFGGRPfBMMRGMZssTTrLlLfsLlVLdsLsdn
GZGSpPGMZtGGPFFRGBCwhvwjjcnJctvQcvHq
vvrPrHZMGJNRMnqn
BVChWWcDVWsBwCWwGrJNhRLJJnJtLqnq
cjDfcfpWWsfWccBsHgPgrPTdpZbbgggv
GshtVtVtjSCVtVvVGtlVvFZLMvLRZmHmZwbLwZdLdZmR
JWzNDQzjcgJgQBJgzgMwLLHZZcdPwRLwRdHZ
QWTppBWfDrrNBTTfffhFCpVSjnhCGsFtsqSl
nmbCnzHHNzCjCJHJNSCWHLBLrvBrrSGRBDhrDRLrGL
TVtPllwcgdmTRhLQTQhT
fdFtccFcpPmggfdfNzHzCMsbCnWnJs
fMgddvjgRRvjvjVJVdTlZGGtGnrlnqTccNjl
HHSFSWSmmpbBpZlGncrNGbNtrn
WDWBDDBDBDCwPBWBDWNQDgzvVvLRvsVLRwvwdJVLwL
ZSmmvcpsmcJmJvqgBZgZqqtCtZjl
WhDwhFSDgtBFjnFg
rTrSTLWTTHNMNwNrMVddwNNhsmJGQcRsRcJGsJzQJsrzPsPm
GBtLmPsCQqsGqgghZHDzzgLbFz
zjjVTzTlRjRJfznrvrfpnNhFSghbbNFgHrbHZbDHbH
vpfcTJVpcVlfcQPMPCGzCBsd
HMhZNffcPZfNMrzjjFdGcJDjvJ
VSBVVLlSQQmTVSWpSQzDrHzTTvDvFjFdGGzT
mQSplVHWbHLSgWQnShNwsZMZPfbsNCRNCt
MMqvDzLwZzlMqQfdGWPfgPffPglH
ShTcJshsrRdnrdfrrfHp
VVRtFhsCJVJVvwQqDdbDQd
dmnNMlFNvmvljnbpMWNDFQvfQJJGvfPCfHGgQQgcJg
bRVzLBSSTRBRBBrwTrVtRwCfcGHcsJgJgzgGsggHCzcC
ZbtVTTrrqrSSVwhqqwBRwFWMDFNdjdZpWjdDDppjMW
MTzqtbLtwFzJgbHgfbdWWH
VMNBjNVjvNfhhhhfNPhP
jmGMvlDZZnVMtzlwzqqCpwFt
PpzGspGmpPsFLrTnTLzzBg
QCWvfjfWjRPFZgrvqrBvTg
wwNRCNQQVNRWjNWfQbHCCClHGDGJdGhpdhtPGhltDlJD
dhbpGzhllzGlPvnzNcvtNVnc
gcFMsTJDMMwrZqfjjqvvfnPtqJ
sWRWTRFwrTgLDDFWgMsTlpSlpbSCdWWdcbmpChGd
QccdFFFcFbcQPQPHMgpPMp
NJlNSSMLDfJfmlSqHZRNpRqNBRPRPq
LlMmJfvDVVTJSmVMscsCFtvwcjWjrjCj
NVVMGWFSMRVGWSthwhTJWzcJCcJsTs
jqRLqlfRZcmjcCzT
rlRRrdrflpdvPbHpflfPlfDBgBMQpGVQMgpVDGMggBDV
VwRhccRsnQStRhtGQVQVsmjgDgqJdggDjqLDgJlLzmLl
BWFZpWHBNCBCNBzBNvWBpzHZqqlMqgNdlllDdqDgJDLlfDdd
pFbTrrrBzbzTtSwStQnnsrVn
DRfFbFqzbddfPFtsJnJRsnClJRsn
cgjgQgWvSLVQgmWWgWVjVSSSBTltThLnqJssnTCZsTThntZT
qjwpSrmWgcSrGMfdFDFdwHFd
RWjDDWDjDNjjgDtSRRgjcjzFpnzwdFbFNdbFbpnldwFF
vQfPfTQJbZdThTzL
PrBQJQsfQqrrbfmPqMBfJbggjRVgWjttsHRSgRctDjSs
NgqNWqqWWdnJdqpBNFtCmJGCDHttDGDsHsHm
BjvzhRLTrTBQhTMQRjRRcjPGtmDCZZDZSCmmMSSZmVmSSt
vQzRvRzQcPcvfQzRnddppFgnFfWwBFlb
nnPvfvgrtPDHgvvGTRRRPZQGpGCLLV
FlBsBdbllFdfWpbGMCVMZLVbZQ
lhchNcqFsJBlBszztvwHjvzgrzmzffgH
zZhdjTpJJpjmmpPZhvqnnZHqZcggvgMbgv
tFpFQFSFtBGlFNwFfNMnHfbHcnvcvcfvcqrM
GBFlNLSNVGVSSGtQSLLBBlNtphDdzpmmPmTPhRmdzdVCCDdR
rpRCCDLpmnCdJCjn
vMhSFvgsMGLmnmWMmm
wVqFFvwvPPHhFhhgHPwHshpqrDDzqlfRbpftRLblrllr
CRNDzdJCVDWzVgDjdjzRJzWRMTbHsMNZNbZMMbsfhTtMTLMB
wSlwQcSpqPpcqcqFSqpwslsTfZtLhtlthtBHtTMZ
SPGFGFFmpcPGDrWDmjDJVffR
dsmdtJthJphWqHRPnRRsvvnnfR
cDBMDDDlBZglDZTMDfzVvNRrvNPVHzRRTV
PGMCCDClBDDbbFqmmhqQdpWGmmWp
BJjcGhcvCnBdGHsmHSzZDzSDMHmRMQ
qLWPLVrTwWlwwwrfrFfGDNmDQRMbQMzzmmbQLNMM
rVWrFlGqlqwVwVGgWGphnvgBBsnvsjdBnCBnBg
sNNsfBsmcGmgNTcHHSpnTWHnpV
QlrhlrlMglhDQrdFblvFtMdnDWwSHDWWwnTSjLwVDSwwwT
QtdMvltZhbFlPPZbQtQthZQdqCsJJGzBqqCBmCNCqgRCBsfP
SZnQnnHRWRQRVjHnqlJTQPfdlqfJftqG
pDzmbDBFbBLvvzttfdlTTl
gsDLLpcmsSZVwlnRsV
LHsWjwjWqCLsqCHcLsjdLqcdbpMGZPPtBhthbZBpBhMllwPG
VFnVbbvJSfbgphSpGlhRBBSP
JrrTgmFgzvNbrmNnmnvzgTLjCQWDLDCsTjssjqcHLc
QmwwqTqsrdqNNqgtvnVDVcGNNtvv
WBFBpzzjSJBJzJbfntgPzVzcvPnzDf
HcpbHZJBFpjpcSZrZsdRQZrCwrwd
JqmLmbtTWThBTWvWGVSrrVDsSGSG
wwzRzNjNNbsPVPds
jfgQRZwpQclQfffHgpRpwpfTcqtLLqCbbFFFLmbmTTBnFB
fGpcccNNqcctqGMprvMPmbbzFSflSRzPBBlBbS
JCjnjTZTTGPSGmTFPb
ZWHhJjHLDVDgHLLDGjnhctsstwqctNwWqNwwQrtv
sDwQhcwhBDDwrhGsQnRBQHHMHHMNJMZFCFRbCRftMM
zjjlmjqfdTqlWdzTqmLzlzVjNCHJNHNFMFtbJNZgVNMMCCtN
vPTfLmPTLWBsPDnSscnS
ngznwDPPTzhPPDCTQnTTDQBQqHNNrHFVppbbjRFFqFhHqRqr
tZJtcGsGtLLcctRqVBbbqrspbHNq
BmZSvGBMdWPzMPgnnz
MpNWPVNWWZWVVNZHVcvJjgBjJMStMJSjjg
rzdCzrCTTLRCslvJDSjjdScgDm
RLhCQzqTCssThRQzRzwGQrrCFffbfWppNpWNWVcHqZbHpVPp
zQzCVWdSSjCdjpchWcGftflGZcgG
RwnJTJwmvFHTBFmtBccZZfBGMstllM
wwvvHRwqDnHFrmqnrSbQVVQfSbqQjbqjbQ
ttDftStSlftPgSHmJbFwnMnFwzbrLHMMzz
GqTBqhBqBvppBvMMTznrCbCnLwfr
RBjjpZZvvZqGcNhjjpNmDPfDcsgfDfgScsQQQg
rsSFccvBHppHPsvQrSHSprFjnbLGdbzLfbGLLtLjjzLzvl
JWWJhmwwTDTGtnzlhdbtLG
CWNqWRNCwnCJVppQFFFFNrgHBB
MSRVnMjnVRVnPlcsrtMtschgDl
NWHBwJBwBBQCHHqwWQGBNgdrFFtsthcqdltdDsqttq
CCTTGCNCCBfNJNNWbGGnvVzDSRfDRSZvLPSzRn
MpRfjRjWpZzzzRzZSpjzZjTCQcGdHLWNGqdBdcBWWBLccn
lrbrsPQDPQglDtwggcLCqnCdNNdHBLsqNd
blwbJggvgbwlvQbvtgwmvVwRfTzfMMjFVfSFjZjMTSTSzj
ttSGjHWVrwWrWWvhzvhmhDfR
qMBdNNsccQgfDRzRmqlhRl
gQJdfJPdQBsMggMjPrTCLjrGrCrtVT
tGFdlwDwGFdNtStghWWdQFSnTVfCfZhrfVTVCVprnRRhVn
cLsBPQJsQPmbmPHTnRRnHprCVfns
MjmvPqqQjPbQzjLwwDWDSlzSlGSgwl
NSCpFgfbscbZZZwrtgPZJT
zGCQlVGmmQGVqqJwGtHZGrPHHRTH
qQvVmvzmqCdhhjzCQLjljLQMnMDSFWcSfnMfpbfnNcFFbFDN
zFgqjQBmWNlWlfHrHdLc
wnbCpSSZZTJSJSnmdrtHfGtftlcpltpH
ZSwhVPPJgNVmNFzs
WNVJthVHRRfLqpqN
gdCGcCgJBCrgScRLzbjQQLfRRR
SCFdGSFvlhTJsnvW
FFZwFZZwRmFFhHtNLNLGRtsqjLMt
gbDnnrMbMCffMPbPLNjGNlcppNtspp
rgbzrzDrgVgnrBzFWMWmWBwHWHShSB
zjRVjDqzRjvSBnBGGsfsrFsV
fLccLLZpJMctwJWWWJWpJGCwFwsgnngFBPsCnnTBPT
LbJlZNWMtpMlHRNHzdfSDfdj
VGbbnJGSTsVTssTTnVVWMtfBBmvftRHfHBMJJfZp
ghqtrzgPrjdzQCjmZMHfRHZHBmQmmB
gltFtDqFVlTVWlTl
HqNqZDTvNvVTLPSTvzfrfHfdndffwnbdnwrH
MpSJlFcMJmcpFlmClcMcRnWbWtthrnfwnCGrrWfrwC
RjcJJmSFMRQpMRFjMNVvTZjNPPvLTBPBBB
MzClDtlzJzFzNGGm
bjcLRHlTBsFJGmRm
HcPSSfTSpLZLbSwtrtvMnlDCDPCl
gWWgQJCsVhgRLCWsdjpmcBHvfvrrnvCvBB
TqDtztqtStlbNTPtllqZpvmcFHjNjvjNvHvmrrmj
ztPPGZqTPSbJgchGgwRQgQ
wVrdtTqtCCvbNgbNTTDN
mhGzWhGzMGWGrRmbFLBHZRNHNvZvgB
hhGhShpnsSrqVCVSSj
HnlbmGnlHZHnlBcjgwfDVfwLsGLGLDgR
WhWMWTvQPWPLDMFRCDMsVD
QdzJQPSPZqJnJRnZ
TTjTjFBcRBGjwsDTBLmrCftfRVrrCftCVNRP
WnqbJWnnQJhSqVfVPfDnggfrVN
hSlDMllvhbQqllZlSWQdSQTBjsFHBjTwGdHBTBszLzcc
rNWqWDLZWcqFqLLLgQQJnndnQdNzzJVMzd
cPtsPvChtRsGswHPGbwcPcdVnpzvnmBmVvJBJdJVJdzn
PfRfRGtsHsSRftbbbbHhwCCsjZgSTgSZWDTcgDZjLqgqFWLq
BNzPnPJNNMwHJRhBGRWRdjFQddFlFjWd
npbZrgnLSCSrWFjjdlZGlcDF
gqtmmngSbmgHJqfqzNBHBJ
stgzttBPRRRdpSVVpdpS
WJFcLQmJZHcCFLJmcZLMfbpGSWMNpGftSSpMrb
mcvvQvHmtLCJmHZQHZHCDHJJnjqPjjPzwvwhnwPqTjPBzPnB
DDmbbPqgFSbSQPtPQJttrltJ
CRfcnZWmRRhJNVtsVnQlsp
fcBvWvWzcZWCzTTCTTvccFMBHGDdSwGFFbqwFSGSmF
tCRBPCPRjzsJszBmtjmCvSpHcppJpvZdHHHcHZJG
qbrlLnWlQDQDNvmHHHHcrZZvdm
nmnWnnWmgQsCFzFCRVCg
sHMHCDZfcwMcRcLMcZDCRCHMPdJqgjvVdvqgdgfdJbQgvWQb
FFhTzmzGrnmtjTBjBBprrmFtqGgQqvVdPbbgqQQWJvvWJQqV
TrNjrnFSlwNZNlNL
JQGdsdzSzsdFQFSdssnndNlZjNPTJZNljVjTPhVPhT
GgGLfRmHGLhNVjjNTLhV
HvGvwpbHHRwpBrvBgSSzSFndtzndCrsFMd
DptFshMrhDhDwmPPhwSNhmmS
RLdcdRvBjnvRVcvlcLbCcbCwwpGBwSmfZqqPPPPwzmfqZq
VlRLvVjCJLnlpvvRdllLcJJWDHgMMHDDHtWFFDDQgH
SsSdrndpDlCdLftd
VGPVJgmQrVGHHZfwLlfCTmfwlDlT
PcJHcGgcWWbJpjRrphRbFpRn
PdPSMHMLzPPSShBdffMMzMRHQQrpppcqTCQQpCccTGTRCnCQ
vsbWmFbmJmZFFsmsbfpGVrGnWrrpVpnnVcTV
JZslstfZNNSSPdlSMwlM
bLLzRzZLbRqJJrDGGVZdwssDvGQw
FCtNJlTFtmPfldSvDvQFVVsjSv
PmCPHBhhPpWLWgzgHJ
qwmwFHCgPgPPqPwMCrHHFBVVRBttVRRffVfmsjVNNB
WSvcSnvbSWbhcbjlQbvlSQhlfBGcspVVsVGfVscpzpNcpBtN
hJSLhlvlTjPFHMLCCq
bggDpTggncGVVWbQcG
sRvSwwwFBSpFzvRvMFZqmPmMVqmcmPPVqhqqWq
SRBBrFZZwrddBFRjlptnLgDnTggdtd
PPfMcZMflbMQcMllPVfTVMwjWWmZvpWWpWhhjjpdWWww
sDQNnzsnQgDNsFzFqtGjGmWWSpWrGhdpvphdSW
nNQNqLBHLqzDnHgnVJfPJPCRBbfCcJlT
fppppWsjcSDPjjDpGhgwbfTgHTCbHJwbHbTR
rLBdQnvMNMmFPbLqHqTqgLHCgL
nrFznvMNMQdttrBcScsDstWcPGtWSc
lclnRSDnGZtvSwnZDZzhLffqdsCNwTBCBBdNsd
mPjmjmrFFpmQjMJQjlNdlhCsCLsTlNLs
ggmrHHVVQVPJpWrgpWScRvzZzGGRnZvlgzZn
GjGJGQJGcMTVfFDQzNVQzP
mHqdbmmdnJqVzVhRVNzPbR
wStmHJsJsLZLjTvM
QssMbVGdMQjZPjwVwHVZPZClllvgSgvlTgwwSSCgSCtC
WmmFBmJrcFRBFrJJBFchzWCStgCTgvhvTlfsNqfTlvTv
sFzzssDLzrBPjDVVddHMQD
fztDZSGrNrlnbnPTgFFpln
jvvQMMcLcjJmQwHdJvjQJnnbTbRFRphnnpsWgmFRPR
vTLHHCQLHBBjJCSZrVCZtSfSfrft
gHfHffHLjwHrRjLrLRZVMnTdTBsNTBwTVBsBnN
DWPhqhhDhvSGvWPzSzMBQBQVMMBBmvssvQvQ
CDGbqCDbChSbWGrHcHRgbcVcfrLJ
frlTLmtllbbbdpJS
qFjhzjThjHTFGHTjqhhjMzBhVpVpdbBnSJQRpBnVVdbRRQJd
vjWPWjWPPPWgwmfCrNvTvZ`
console.log(findItemPriority(puzzleInput)); */